import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, PlayCircle, BookOpen, CheckCircle, Youtube, Star } from 'lucide-react';
import { Chapter, Topic, UserProgress } from '../types';
import { MathText } from './MathText';

interface ChapterListProps {
  chapters: Chapter[];
  onSelectTopic: (topic: Topic) => void;
  progress: UserProgress;
}

export const ChapterList: React.FC<ChapterListProps> = ({ chapters, onSelectTopic, progress }) => {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  const toggleChapter = (id: string) => {
    setExpandedChapter(expandedChapter === id ? null : id);
  };

  const getChapterProgress = (chapter: Chapter) => {
    const completed = chapter.topics.filter((t) => progress.completedTopics[t.id] !== undefined).length;
    return { completed, total: chapter.topics.length };
  };

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const getTopicStars = (topic: Topic) => {
    const topicScore = progress.completedTopics[topic.id];
    if (topicScore === undefined) return 0;

    const percentage = topicScore / topic.questions.length;
    if (percentage >= 0.8) return 3;
    if (percentage >= 0.5) return 2;
    return 1;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-6">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-200/80 dark:border-cyan-800/50 bg-white/75 dark:bg-[#0c1624]/80 backdrop-blur-md mb-4 shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
            Danh mục chuyên đề
          </span>
        </div>

        <h1 className="text-4xl font-black text-slate-900 dark:text-slate-50 mb-2 tracking-tight">
          Toán Lớp 12
        </h1>
        <p className="text-slate-600 dark:text-slate-400 font-semibold text-lg">
          Lộ trình huấn luyện theo từng chuyên đề
        </p>
      </div>

      {chapters.map((chapter) => {
        const { completed, total } = getChapterProgress(chapter);
        const isChapterCompleted = completed === total;

        return (
          <div
            key={chapter.id}
            className="bg-white/82 dark:bg-[#0c1624]/82 rounded-[2rem] shadow-[0_10px_28px_rgba(0,0,0,0.10)] border border-slate-200/80 dark:border-cyan-900/40 overflow-hidden transition-all duration-300 backdrop-blur-md"
          >
            <button
              onClick={() => toggleChapter(chapter.id)}
              className="w-full px-6 py-6 flex items-center justify-between hover:bg-slate-50/80 dark:hover:bg-slate-900/20 transition-colors"
            >
              <div className="flex items-center text-left gap-4">
                <div
                  className={`p-4 rounded-2xl border shadow-sm ${
                    isChapterCompleted
                      ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-700/30'
                      : 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/40'
                  }`}
                >
                  <BookOpen size={24} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="text-lg font-black text-slate-900 dark:text-slate-50 leading-tight">
                      {chapter.title}
                    </h2>

                    {isChapterCompleted && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[10px] font-black uppercase tracking-[0.18em]">
                        Hoàn tất
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-28 bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-200/60 dark:border-slate-700">
                      <div
                        className={`h-full transition-all duration-700 ease-out ${
                          isChapterCompleted
                            ? 'bg-gradient-to-r from-emerald-500 to-lime-400'
                            : 'bg-gradient-to-r from-cyan-500 to-blue-600'
                        }`}
                        style={{ width: `${(completed / total) * 100}%` }}
                      />
                    </div>

                    <span className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.16em]">
                      {completed}/{total} bài
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-slate-400 dark:text-slate-500 ml-4 bg-slate-50 dark:bg-[#132235] p-2 rounded-full border border-slate-200 dark:border-cyan-900/40">
                {expandedChapter === chapter.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>

            <AnimatePresence>
              {expandedChapter === chapter.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'circOut' }}
                  className="border-t border-slate-100 dark:border-cyan-950/40"
                >
                  <div className="p-4 bg-gradient-to-b from-white/70 to-cyan-50/30 dark:from-[#0c1624]/40 dark:to-[#08131d]/20">
                    {chapter.topics.map((topic, index) => {
                      const isCompleted = progress.completedTopics[topic.id] !== undefined;
                      const videoId = topic.youtubeUrl ? getYoutubeId(topic.youtubeUrl) : null;
                      const stars = getTopicStars(topic);

                      return (
                        <div
                          key={topic.id}
                          className="mb-3 p-1 rounded-[1.5rem] hover:bg-white/80 dark:hover:bg-slate-900/20 transition-all group"
                        >
                          <button
                            onClick={() => onSelectTopic(topic)}
                            className="w-full flex items-center justify-between p-3 text-left"
                          >
                            <div className="flex items-start gap-4 pr-4">
                              <span className="text-slate-400 dark:text-slate-500 font-black mt-0.5 w-6 text-sm">
                                {index + 1}.
                              </span>

                              <div>
                                <div
                                  className={`font-black text-base transition-colors ${
                                    isCompleted
                                      ? 'text-emerald-600 dark:text-emerald-400'
                                      : 'text-slate-800 dark:text-slate-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-300'
                                  }`}
                                >
                                  <MathText content={topic.title} />
                                </div>

                                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1 font-medium">
                                  <MathText content={topic.description} />
                                </div>

                                {isCompleted && (
                                  <div className="flex items-center gap-1.5 mt-2">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                      <Star
                                        key={i}
                                        size={14}
                                        className={
                                          i < stars
                                            ? 'text-amber-500 fill-amber-500'
                                            : 'text-slate-300 dark:text-slate-700'
                                        }
                                      />
                                    ))}
                                    <span className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400 ml-1">
                                      Đánh giá
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>

                            <div
                              className={`${
                                isCompleted
                                  ? 'text-emerald-500'
                                  : 'text-slate-300 dark:text-slate-700 group-hover:text-cyan-500'
                              } transition-colors shrink-0`}
                            >
                              {isCompleted ? <CheckCircle size={26} /> : <PlayCircle size={26} />}
                            </div>
                          </button>

                          {videoId && (
                            <a
                              href={topic.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 mb-4 ml-12 mr-3 block relative rounded-2xl overflow-hidden border border-slate-200 dark:border-cyan-900/40 group/video shadow-sm"
                            >
                              <img
                                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                alt="Video bài giảng"
                                className="w-full h-36 sm:h-44 object-cover transition-transform duration-500 group-hover/video:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/10 to-transparent group-hover/video:from-slate-950/50 transition-colors flex items-center justify-center">
                                <div className="w-14 h-14 bg-white/92 dark:bg-[#0f1b2b]/92 backdrop-blur-sm rounded-full flex items-center justify-center text-red-600 shadow-xl transition-transform group-hover/video:scale-110 border border-white/40 dark:border-cyan-900/40">
                                  <Youtube size={32} className="fill-red-600" />
                                </div>
                              </div>

                              <div className="absolute left-3 bottom-3 px-3 py-1 rounded-full bg-slate-950/70 text-white text-[10px] font-black uppercase tracking-[0.18em]">
                                Hướng dẫn nhanh
                              </div>
                            </a>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};