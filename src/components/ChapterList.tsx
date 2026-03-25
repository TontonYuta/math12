import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, PlayCircle, BookOpen, CheckCircle, Youtube } from 'lucide-react';
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
    const completed = chapter.topics.filter(t => progress.completedTopics[t.id] !== undefined).length;
    return { completed, total: chapter.topics.length };
  };

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-6">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300/70 dark:border-amber-500/20 bg-amber-50/80 dark:bg-slate-900/70 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300">
            Chọn ải để bắt đầu
          </span>
        </div>

        <h1 className="text-4xl font-black text-stone-900 dark:text-amber-50 mb-2 tracking-tight">
          Toán Lớp 12
        </h1>
        <p className="text-stone-500 dark:text-slate-400 font-semibold text-lg">
          Hành trình vượt ải và mở khóa tri thức
        </p>
      </div>

      {chapters.map((chapter) => {
        const { completed, total } = getChapterProgress(chapter);
        const isChapterCompleted = completed === total;

        return (
          <div
            key={chapter.id}
            className="bg-white/85 dark:bg-slate-900/75 rounded-[2rem] shadow-xl border-2 border-amber-200/70 dark:border-amber-500/20 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleChapter(chapter.id)}
              className="w-full px-6 py-6 flex items-center justify-between hover:bg-amber-50/40 dark:hover:bg-slate-800/40 transition-colors"
            >
              <div className="flex items-center text-left gap-4">
                <div
                  className={`p-4 rounded-2xl border shadow-sm ${
                    isChapterCompleted
                      ? 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20'
                      : 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-500/20'
                  }`}
                >
                  <BookOpen size={24} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="text-lg font-black text-stone-900 dark:text-amber-50 leading-tight">
                      {chapter.title}
                    </h2>
                    {isChapterCompleted && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[10px] font-black uppercase tracking-[0.2em]">
                        Hoàn thành
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-28 bg-stone-200/70 dark:bg-slate-700 h-2 rounded-full overflow-hidden border border-white/40 dark:border-slate-600">
                      <div
                        className={`h-full transition-all duration-700 ease-out ${
                          isChapterCompleted
                            ? 'bg-gradient-to-r from-emerald-500 to-lime-400'
                            : 'bg-gradient-to-r from-amber-500 to-yellow-400'
                        }`}
                        style={{ width: `${(completed / total) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-black text-stone-500 dark:text-slate-400 uppercase tracking-[0.18em]">
                      {completed}/{total} ải
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-stone-400 dark:text-slate-500 ml-4 bg-amber-50 dark:bg-slate-800 p-2 rounded-full">
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
                  className="border-t border-amber-100/80 dark:border-slate-700"
                >
                  <div className="p-4 bg-gradient-to-b from-white to-amber-50/30 dark:from-slate-900/40 dark:to-slate-900/10">
                    {chapter.topics.map((topic, index) => {
                      const isCompleted = progress.completedTopics[topic.id] !== undefined;
                      const videoId = topic.youtubeUrl ? getYoutubeId(topic.youtubeUrl) : null;

                      return (
                        <div
                          key={topic.id}
                          className="mb-3 p-1 rounded-[1.5rem] hover:bg-white/70 dark:hover:bg-slate-800/50 transition-all group"
                        >
                          <button
                            onClick={() => onSelectTopic(topic)}
                            className="w-full flex items-center justify-between p-3 text-left"
                          >
                            <div className="flex items-start gap-4 pr-4">
                              <span className="text-stone-400 dark:text-slate-500 font-black mt-0.5 w-6 text-sm">
                                {index + 1}.
                              </span>

                              <div>
                                <div
                                  className={`font-black text-base transition-colors ${
                                    isCompleted
                                      ? 'text-emerald-600 dark:text-emerald-400'
                                      : 'text-stone-800 dark:text-amber-50 group-hover:text-amber-600 dark:group-hover:text-amber-300'
                                  }`}
                                >
                                  <MathText content={topic.title} />
                                </div>

                                <div className="text-sm text-stone-500 dark:text-slate-400 mt-1 line-clamp-1 font-medium">
                                  <MathText content={topic.description} />
                                </div>
                              </div>
                            </div>

                            <div
                              className={`${
                                isCompleted
                                  ? 'text-emerald-500'
                                  : 'text-stone-300 dark:text-slate-700 group-hover:text-amber-500'
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
                              className="mt-2 mb-4 ml-12 mr-3 block relative rounded-2xl overflow-hidden border-2 border-amber-100 dark:border-slate-700 group/video shadow-md"
                            >
                              <img
                                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                alt="Video hướng dẫn vượt ải"
                                className="w-full h-36 sm:h-44 object-cover transition-transform duration-500 group-hover/video:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/10 group-hover/video:from-black/50 transition-colors flex items-center justify-center">
                                <div className="w-14 h-14 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-600 shadow-xl transition-transform group-hover/video:scale-110 border border-white/50 dark:border-slate-700">
                                  <Youtube size={32} className="fill-red-600" />
                                </div>
                              </div>
                              <div className="absolute left-3 bottom-3 px-3 py-1 rounded-full bg-stone-950/70 text-white text-[10px] font-black uppercase tracking-[0.18em]">
                                Video trợ chiến
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