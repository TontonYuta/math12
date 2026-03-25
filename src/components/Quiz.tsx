/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight, Check } from 'lucide-react';
import { Topic, QuestionImage, UserAnswer } from '../types';
import { MathText } from './MathText';

interface QuizProps {
  topic: Topic;
  onBack: () => void;
  onComplete: (score: number, total: number, userAnswers: UserAnswer[]) => void;
}

const renderQuestionImages = (images?: QuestionImage[]) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4 mb-6">
      {images.map((image, index) => (
        <figure
          key={`${image.src}-${index}`}
          className="overflow-hidden rounded-2xl border border-slate-200 dark:border-cyan-900/40 bg-slate-50 dark:bg-slate-950/30"
        >
          <img
            src={image.src}
            alt={image.alt || `Hình minh họa ${index + 1}`}
            className="w-full h-auto object-contain max-h-80"
            loading="lazy"
          />
          {image.caption && (
            <figcaption className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-cyan-900/40 text-center italic">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
};

const normalizeString = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(',', '.')
    .replace(/\.$/, '');

export const Quiz: React.FC<QuizProps> = ({ topic, onBack, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [tfSelections, setTfSelections] = useState<(boolean | null)[]>([]);
  const [shortAnswerInput, setShortAnswerInput] = useState('');

  const question = topic.questions[currentQuestionIndex];

  useEffect(() => {
    if (!question) return;

    const questionType = question.type ?? 'single-choice';
    if (questionType === 'true-false' && question.trueFalseStatements) {
      setTfSelections(new Array(question.trueFalseStatements.length).fill(null));
    } else {
      setTfSelections([]);
    }
  }, [currentQuestionIndex, question]);

  const playCorrectSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  const playIncorrectSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3');
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };

  if (!topic.questions || topic.questions.length === 0 || !question) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4 min-h-screen flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="p-2 -ml-2 text-slate-500 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-slate-900/30 rounded-full transition-colors shrink-0"
          >
            <ArrowLeft size={24} />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white/88 dark:bg-[#0c1624]/88 backdrop-blur-md p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.10)] border border-slate-200 dark:border-cyan-900/40 text-center max-w-lg w-full">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
              Chuyên đề này chưa có câu hỏi
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Hãy quay lại để chọn nội dung khác hoặc bổ sung bộ câu hỏi cho chuyên đề này.
            </p>
            <button
              onClick={onBack}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold transition-all active:scale-[0.98]"
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isLastQuestion = currentQuestionIndex === topic.questions.length - 1;
  const questionType = question.type ?? 'single-choice';

  const handleOptionSelect = (index: number) => {
    if (isAnswered || questionType !== 'single-choice') return;

    setSelectedOption(index);
    setIsAnswered(true);

    if (index === question.correctAnswerIndex) {
      setScore((prev) => prev + 1);
      playCorrectSound();
    } else {
      playIncorrectSound();
    }
  };

  const handleCheckAnswer = () => {
    if (isAnswered) return;
    setIsAnswered(true);

    let isCorrect = false;

    if (questionType === 'true-false') {
      isCorrect = question.trueFalseAnswers?.every((ans, idx) => ans === tfSelections[idx]) ?? false;
    } else if (questionType === 'short-answer') {
      isCorrect = normalizeString(shortAnswerInput) === normalizeString(question.answerText || '');
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
      playCorrectSound();
    } else {
      playIncorrectSound();
    }
  };

  const handleNext = () => {
    let currentAnswer: UserAnswer = null;

    if (questionType === 'single-choice') {
      currentAnswer = selectedOption;
    } else if (questionType === 'true-false') {
      currentAnswer = tfSelections as boolean[];
    } else if (questionType === 'short-answer') {
      currentAnswer = shortAnswerInput;
    }

    const newAnswers = [...userAnswers, currentAnswer];
    setUserAnswers(newAnswers);

    if (isLastQuestion) {
      onComplete(score, topic.questions.length, newAnswers);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsAnswered(false);
      setSelectedOption(null);
      setShortAnswerInput('');
      setTfSelections([]);
    }
  };

  const isSubmitDisabled = () => {
    if (questionType === 'true-false') return tfSelections.some((val) => val === null);
    if (questionType === 'short-answer') return shortAnswerInput.trim() === '';
    return false;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 min-h-screen flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-slate-500 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-slate-900/30 rounded-full transition-colors shrink-0"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="text-sm font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/10 px-4 py-1.5 rounded-full whitespace-nowrap border border-cyan-200 dark:border-cyan-900/40 uppercase tracking-[0.14em]">
          Mục {currentQuestionIndex + 1} / {topic.questions.length}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-[clamp(18px,5vw,22px)] font-black text-slate-900 dark:text-slate-50 mb-3 text-wrap balance">
          {topic.title}
        </h2>
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-200/60 dark:border-slate-700">
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-700 h-full transition-all duration-300 ease-out"
            style={{ width: `${((currentQuestionIndex + 1) / topic.questions.length) * 100}%` }}
          />
        </div>
      </div>

      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        <div className="bg-white/88 dark:bg-[#0c1624]/88 backdrop-blur-md p-5 sm:p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.10)] border border-slate-200 dark:border-cyan-900/40 mb-6 overflow-hidden">
          <div className="mb-3">
            <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-slate-100 dark:bg-[#132235] text-slate-600 dark:text-cyan-300 border border-slate-200 dark:border-cyan-900/40">
              Phiên kiểm tra
            </span>
          </div>

          <div className="text-[clamp(16px,4.5vw,20px)] font-medium text-slate-900 dark:text-slate-100 leading-relaxed mb-6 overflow-visible">
            <MathText content={question.text} />
          </div>

          {renderQuestionImages(question.images)}

          {questionType === 'single-choice' && (
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = index === question.correctAnswerIndex;
                const optionImage = question.optionImages?.[index] ?? null;

                let optionClasses =
                  'w-full text-left px-4 py-3 rounded-2xl border-2 transition-all duration-200 flex items-start justify-between gap-3 overflow-visible ';

                if (!isAnswered) {
                  optionClasses +=
                    'border-slate-200 dark:border-cyan-900/30 hover:border-cyan-400 hover:bg-cyan-50/60 dark:hover:bg-cyan-500/5 text-slate-700 dark:text-slate-300';
                } else if (isCorrect) {
                  optionClasses +=
                    'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-medium';
                } else if (isSelected && !isCorrect) {
                  optionClasses +=
                    'border-rose-500 bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-300';
                } else {
                  optionClasses += 'border-slate-200 dark:border-cyan-900/30 opacity-50 text-slate-500';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    disabled={isAnswered}
                    className={optionClasses}
                  >
                    <div className="flex-1 min-w-0 overflow-visible">
                      <div className="text-[clamp(14px,4vw,16px)] leading-7 overflow-visible">
                        <MathText content={option} />
                      </div>

                      {optionImage && (
                        <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 dark:border-cyan-900/40">
                          <img
                            src={optionImage.src}
                            alt={optionImage.alt || `Hình đáp án ${index + 1}`}
                            className="w-full h-auto object-contain max-h-72"
                            loading="lazy"
                          />
                          {optionImage.caption && (
                            <div className="px-3 py-2 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-cyan-900/40">
                              {optionImage.caption}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="text-rose-500 shrink-0 mt-1" size={20} />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {questionType === 'true-false' && question.trueFalseStatements && (
            <div className="space-y-3">
              {question.trueFalseStatements.map((stmt, idx) => {
                const userChoice = tfSelections[idx];
                const correctChoice = question.trueFalseAnswers?.[idx];

                const getBtnClass = (isTrueBtn: boolean) => {
                  if (!isAnswered) {
                    return userChoice === isTrueBtn
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white border-cyan-600 shadow-md scale-105'
                      : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 dark:bg-slate-900/40 dark:border-slate-700 dark:text-slate-300';
                  }

                  if (correctChoice === isTrueBtn) return 'bg-emerald-500 text-white border-emerald-500 shadow-sm';
                  if (userChoice === isTrueBtn) return 'bg-rose-500 text-white border-rose-500 shadow-sm';
                  return 'bg-slate-50 border-slate-200 text-slate-300 opacity-50 dark:bg-slate-900/40 dark:border-slate-700';
                };

                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border-2 border-slate-200 dark:border-cyan-900/30 bg-white/70 dark:bg-slate-900/20"
                  >
                    <div className="flex-1 text-[clamp(14px,4vw,16px)] text-slate-800 dark:text-slate-200 overflow-visible">
                      <div className="font-black mb-1 text-cyan-700 dark:text-cyan-300 uppercase tracking-[0.18em] text-xs">
                        Mệnh đề {String.fromCharCode(97 + idx)}
                      </div>
                      <div className="leading-7 overflow-visible">
                        <MathText content={stmt} />
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0 self-start sm:self-center">
                      <button
                        onClick={() => {
                          const newSelections = [...tfSelections];
                          newSelections[idx] = true;
                          setTfSelections(newSelections);
                        }}
                        disabled={isAnswered}
                        className={`px-4 py-2 rounded-xl font-bold border-2 transition-all duration-200 ${getBtnClass(true)}`}
                      >
                        Đúng
                      </button>
                      <button
                        onClick={() => {
                          const newSelections = [...tfSelections];
                          newSelections[idx] = false;
                          setTfSelections(newSelections);
                        }}
                        disabled={isAnswered}
                        className={`px-4 py-2 rounded-xl font-bold border-2 transition-all duration-200 ${getBtnClass(false)}`}
                      >
                        Sai
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {questionType === 'short-answer' && (
            <div className="mt-2">
              <label className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-[0.14em]">
                Nhập đáp án:
              </label>
              <input
                type="text"
                value={shortAnswerInput}
                onChange={(e) => setShortAnswerInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isAnswered && !isSubmitDisabled()) {
                    handleCheckAnswer();
                  }
                }}
                disabled={isAnswered}
                placeholder="Ví dụ: 15, -2.5, 1/2..."
                className={`w-full p-4 border-2 rounded-xl text-center font-bold text-xl outline-none transition-all ${
                  !isAnswered
                    ? 'border-cyan-200 focus:border-cyan-500 bg-white dark:bg-slate-950/30 text-slate-900 dark:text-white'
                    : normalizeString(shortAnswerInput) === normalizeString(question.answerText || '')
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                      : 'border-rose-500 bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300'
                }`}
              />

              {isAnswered &&
                normalizeString(shortAnswerInput) !== normalizeString(question.answerText || '') && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-700/30 text-center">
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-black uppercase mb-1 tracking-[0.14em]">
                      Đáp án chính xác
                    </p>
                    <p className="text-xl font-black text-emerald-700 dark:text-emerald-300">
                      {question.answerText}
                    </p>
                  </div>
                )}
            </div>
          )}
        </div>

        {isAnswered && question.explanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-cyan-50 dark:bg-cyan-500/10 p-5 rounded-2xl border border-cyan-200 dark:border-cyan-900/30 mb-6"
          >
            <h4 className="font-black text-cyan-900 dark:text-cyan-300 mb-2 text-sm uppercase tracking-[0.16em]">
              Phân tích đáp án
            </h4>
            <div className="text-cyan-800 dark:text-cyan-200 text-[clamp(13px,3.5vw,15px)] leading-relaxed overflow-visible">
              <MathText content={question.explanation} />
            </div>
          </motion.div>
        )}
      </motion.div>

      <div className="mt-auto pt-4 pb-8">
        {!isAnswered && questionType !== 'single-choice' && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleCheckAnswer}
            disabled={isSubmitDisabled()}
            className={`w-full font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
              isSubmitDisabled()
                ? 'bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-200 dark:shadow-none'
            }`}
          >
            <Check size={20} />
            Kiểm tra đáp án
          </motion.button>
        )}

        {isAnswered && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 hover:from-cyan-700 hover:via-sky-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg shadow-cyan-200/40 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            {isLastQuestion ? 'Hoàn thành phiên làm bài' : 'Tiếp tục'}
            <ArrowRight size={20} />
          </motion.button>
        )}
      </div>
    </div>
  );
};