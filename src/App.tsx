/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Capacitor } from '@capacitor/core';
import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { chapters } from './data/chapters';
import { achievements } from './data/achievements';
import { ChapterList } from './components/ChapterList';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import { Review } from './components/Review';
import { Settings } from './components/Settings';
import { Topic, UserProgress, Achievement } from './types';
import {
  Trophy,
  Star,
  X,
  Settings as SettingsIcon,
  RefreshCw,
  User,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { APP_VERSION, VERSION_CHECK_URL } from './config';

type AppState = 'home' | 'quiz' | 'result' | 'review';
type UserAnswer = number | boolean[] | string | null;

const STORAGE_KEY = 'math_quiz_progress';
const THEME_KEY = 'math_quiz_theme';

const initialProgress: UserProgress = {
  completedTopics: {},
  unlockedAchievements: []
};

export default function App() {
  const [appState, setAppState] = useState<AppState>('home');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const [progress, setProgress] = useState<UserProgress>(initialProgress);
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [studentName, setStudentName] = useState<string>(() => localStorage.getItem('studentName') || '');
  const [showUpdateBanner, setShowUpdateBanner] = useState(false);
  const [isCheckingUpdate, setIsCheckingUpdate] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('Có màn chơi mới! Hãy cập nhật để tiếp tục cuộc phiêu lưu.');
  const [updateUrl, setUpdateUrl] = useState<string | null>(null);
  const [newVersion, setNewVersion] = useState<string>('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateProgressText, setUpdateProgressText] = useState('');
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('studentName', studentName);
  }, [studentName]);

  const checkForUpdates = async () => {
    setIsCheckingUpdate(true);
    try {
      if (!VERSION_CHECK_URL) {
        setTimeout(() => {
          setIsCheckingUpdate(false);
          alert('Chưa cấu hình link kiểm tra phiên bản (VERSION_CHECK_URL).');
        }, 1000);
        return;
      }

      const response = await fetch(VERSION_CHECK_URL);
      const data = await response.json();

      if (data.version && data.version !== APP_VERSION) {
        if (data.message) setUpdateMessage(data.message);
        if (data.updateUrl) setUpdateUrl(data.updateUrl);
        setNewVersion(data.version);
        setShowUpdateBanner(true);
      } else {
        alert('Bạn đang ở phiên bản mới nhất!');
      }
    } catch (error) {
      console.error('Lỗi kiểm tra phiên bản:', error);
      alert('Không thể kiểm tra phiên bản lúc này. Vui lòng thử lại sau.');
    } finally {
      setIsCheckingUpdate(false);
    }
  };

  const handleUpdate = async () => {
    if (Capacitor.isNativePlatform()) {
      try {
        setIsUpdating(true);
        setUpdateProgressText('Đang kết nối cổng dịch chuyển...');

        const downloadUrl =
          updateUrl || `https://github.com/TontonYuta/math6/releases/download/v${newVersion}/update.zip`;

        setUpdateProgressText('Đang tải bản nâng cấp...');

        const version = await CapacitorUpdater.download({
          url: downloadUrl,
          version: newVersion
        });

        setUpdateProgressText('Đang kích hoạt bản nâng cấp...');

        await CapacitorUpdater.set({ id: version.id });
      } catch (error: any) {
        console.error('Lỗi cập nhật OTA:', error);
        alert('Cập nhật thất bại. Lỗi: ' + (error.message || 'Không thể tải file từ máy chủ.'));
        setIsUpdating(false);
      }
    } else {
      if (updateUrl && updateUrl.endsWith('.apk')) {
        window.open(updateUrl, '_blank');
      } else {
        window.location.reload();
      }
    }
  };

  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (e) {
        console.error('Lỗi đọc dữ liệu', e);
      }
    }

    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem(THEME_KEY, 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem(THEME_KEY, 'light');
      }
      return next;
    });
  };

  const resetProgress = () => {
    setProgress(initialProgress);
    localStorage.removeItem(STORAGE_KEY);
  };

  const updateProgress = (topicId: string, finalScore: number) => {
    const newProgress = { ...progress };

    const currentBest = newProgress.completedTopics[topicId] || 0;
    if (finalScore > currentBest) {
      newProgress.completedTopics[topicId] = finalScore;
    }

    const newlyUnlocked: string[] = [];
    achievements.forEach((achievement) => {
      if (!newProgress.unlockedAchievements.includes(achievement.id) && achievement.condition(newProgress)) {
        newlyUnlocked.push(achievement.id);
        setNewAchievement(achievement);
        triggerConfetti();
      }
    });

    newProgress.unlockedAchievements = [...newProgress.unlockedAchievements, ...newlyUnlocked];

    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#eab308', '#22c55e']
    });
  };

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setAppState('quiz');
  };

  const handleQuizComplete = (finalScore: number, total: number, answers: UserAnswer[]) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setUserAnswers(answers);

    if (selectedTopic) {
      updateProgress(selectedTopic.id, finalScore);
    }

    setAppState('result');
  };

  const handleRetry = () => {
    setAppState('quiz');
    setUserAnswers([]);
  };

  const handleHome = () => {
    setAppState('home');
    setSelectedTopic(null);
    setUserAnswers([]);
    setScore(0);
    setTotalQuestions(0);
  };

  const handleReview = () => {
    setAppState('review');
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.14),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.12),_transparent_30%)] bg-[#f8f5ea] dark:bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.14),_transparent_25%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.10),_transparent_30%)] dark:bg-[#0f172a] font-sans text-stone-900 dark:text-amber-50 selection:bg-amber-200 dark:selection:bg-amber-700/40 transition-colors duration-500 scroll-smooth antialiased">
      <AnimatePresence>
        {showUpdateBanner && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-stone-950 p-3 text-center shadow-lg flex justify-center items-center gap-4 border-b border-amber-300"
          >
            <span className="font-black text-sm tracking-wide uppercase">
              {isUpdating ? updateProgressText : updateMessage}
            </span>
            <button
              onClick={handleUpdate}
              disabled={isUpdating}
              className="bg-stone-950 text-amber-300 px-5 py-1.5 rounded-full text-sm font-black hover:bg-stone-800 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm uppercase"
            >
              {isUpdating ? 'Đang xử lý...' : 'Nâng cấp'}
            </button>
            {!isUpdating && (
              <button
                onClick={() => setShowUpdateBanner(false)}
                className="text-stone-800 hover:text-black transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <AnimatePresence mode="wait">
          {appState === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-8 sticky top-4 z-10">
                <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl px-5 py-3 rounded-[1.5rem] shadow-lg border-2 border-amber-200/80 dark:border-amber-500/20">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-300 text-stone-900 shadow-sm">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Nhập tên chiến binh..."
                    className="bg-transparent border-none outline-none text-sm font-bold w-32 sm:w-48 text-stone-800 dark:text-amber-50 placeholder:text-stone-400 dark:placeholder:text-slate-500"
                  />
                </div>
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="p-3 text-stone-600 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[1.5rem] shadow-lg border-2 border-amber-200/80 dark:border-amber-500/20 transition-all hover:scale-105 active:scale-95"
                  aria-label="Cài đặt"
                >
                  <SettingsIcon size={24} />
                </button>
              </div>

              <div className="mb-8 rounded-[2rem] border-2 border-amber-300/70 dark:border-amber-500/20 bg-white/75 dark:bg-slate-900/70 backdrop-blur-xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-700 dark:text-amber-300">
                    Bản đồ phiêu lưu
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 dark:text-amber-50">
                  Chinh phục từng ải Toán học
                </h1>
                <p className="mt-2 text-sm sm:text-base text-stone-600 dark:text-slate-300 font-medium">
                  Mở khóa chương mới, tích lũy thành tích và vượt qua các thử thách như một nhà thám hiểm thực thụ.
                </p>
              </div>

              <ChapterList chapters={chapters} onSelectTopic={handleSelectTopic} progress={progress} />

              <div className="mt-12 max-w-2xl mx-auto px-2">
                <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl rounded-[2rem] border-2 border-amber-200/70 dark:border-amber-500/20 shadow-xl overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setIsAchievementsOpen(!isAchievementsOpen)}
                    className="w-full flex items-center justify-between p-5 hover:bg-amber-50/50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-amber-300 to-yellow-200 dark:from-amber-500/20 dark:to-yellow-500/20 rounded-2xl shadow-inner border border-amber-200/60 dark:border-amber-400/10">
                        <Trophy className="text-amber-700 dark:text-amber-300" size={26} />
                      </div>
                      <div className="text-left">
                        <h2 className="text-xl font-black text-stone-900 dark:text-amber-50 uppercase tracking-wider">
                          Kho huy hiệu
                        </h2>
                        <p className="text-xs text-stone-500 dark:text-slate-400 mt-0.5 font-semibold">
                          Đã mở khóa:{' '}
                          <span className="text-emerald-600 dark:text-emerald-400 font-black">
                            {progress.unlockedAchievements.length}
                          </span>
                          /{achievements.length}
                        </p>
                      </div>
                    </div>
                    <div className="text-stone-500 dark:text-slate-400 bg-amber-100/60 dark:bg-slate-800 p-2 rounded-full">
                      {isAchievementsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isAchievementsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="p-5 pt-0 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-amber-100/70 dark:border-slate-700/50 mt-2 pt-4">
                          {achievements.map((achievement) => {
                            const isUnlocked = progress.unlockedAchievements.includes(achievement.id);
                            return (
                              <div
                                key={achievement.id}
                                className={`p-4 rounded-[1.5rem] border-2 flex flex-col items-center text-center transition-all duration-300 ${
                                  isUnlocked
                                    ? 'bg-gradient-to-b from-amber-50 to-white dark:from-slate-800 dark:to-slate-900 border-amber-300 dark:border-amber-500/30 shadow-md'
                                    : 'bg-stone-100/40 dark:bg-slate-800/20 border-stone-200/60 dark:border-slate-700/30 opacity-50 grayscale'
                                }`}
                              >
                                <span className="text-3xl mb-3 drop-shadow-sm">{achievement.icon}</span>
                                <h3 className="text-xs font-black text-stone-800 dark:text-amber-50 leading-tight mb-1">
                                  {achievement.title}
                                </h3>
                                <p className="text-[10px] text-stone-500 dark:text-slate-400 leading-tight">
                                  {achievement.description}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          {appState === 'quiz' && selectedTopic && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Quiz topic={selectedTopic} onBack={handleHome} onComplete={handleQuizComplete} />
            </motion.div>
          )}

          {appState === 'result' && selectedTopic && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Result
                score={score}
                total={totalQuestions}
                topicTitle={selectedTopic.title}
                onRetry={handleRetry}
                onHome={handleHome}
                onReview={handleReview}
              />
            </motion.div>
          )}

          {appState === 'review' && selectedTopic && (
            <motion.div
              key="review"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Review topic={selectedTopic} userAnswers={userAnswers} onBack={() => setAppState('result')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-8 text-center text-xs text-stone-500 dark:text-slate-500">
        <button
          onClick={checkForUpdates}
          disabled={isCheckingUpdate}
          className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors flex items-center justify-center gap-2 mx-auto uppercase tracking-[0.25em] font-black"
        >
          <RefreshCw size={14} className={isCheckingUpdate ? 'animate-spin' : ''} />
          {isCheckingUpdate ? 'Đang kiểm tra...' : `Phiên bản: ${APP_VERSION}`}
        </button>
      </footer>

      <AnimatePresence>
        {newAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[70] w-[90%] max-w-sm"
          >
            <div className="bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-500 text-stone-950 p-6 rounded-[2rem] shadow-2xl flex items-center gap-4 relative overflow-hidden border-2 border-yellow-200">
              <div className="absolute top-0 right-0 p-3">
                <button
                  onClick={() => setNewAchievement(null)}
                  className="text-stone-800/60 hover:text-black transition-colors active:scale-90"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="bg-white/30 p-3 rounded-2xl backdrop-blur-sm shadow-inner border border-white/40">
                <span className="text-4xl drop-shadow-md">{newAchievement.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <Star size={14} className="fill-stone-900 text-stone-900" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-800">
                    Huy hiệu mới!
                  </span>
                </div>
                <h3 className="text-lg font-black leading-tight tracking-tight">{newAchievement.title}</h3>
                <p className="text-xs text-stone-800/90 mt-1 font-semibold">{newAchievement.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSettingsOpen && (
          <Settings
            isOpen={isSettingsOpen}
            onClose={() => setIsSettingsOpen(false)}
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
            onResetProgress={resetProgress}
          />
        )}
      </AnimatePresence>
    </div>
  );
}