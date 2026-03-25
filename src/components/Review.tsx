import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { Topic, QuestionImage, UserAnswer } from '../types';
import { MathText } from './MathText';

interface ReviewProps {
  topic: Topic;
  userAnswers: UserAnswer[];
  onBack: () => void;
}

const normalizeString = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(',', '.')
    .replace(/\.$/, '');

const renderQuestionImages = (images?: QuestionImage[]) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4 mb-6 mt-4">
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

export const Review: React.FC<ReviewProps> = ({ topic, userAnswers, onBack }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 pb-12 antialiased">
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 sticky top-0 bg-white/75 dark:bg-[#08131d]/75 backdrop-blur-xl z-30 py-4 sm:py-6 px-2 -mx-2 border-b border-slate-200/70 dark:border-cyan-900/30">
        <button
          onClick={onBack}
          className="p-2 sm:p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/40 hover:text-cyan-700 dark:hover:text-cyan-300 rounded-full transition-all active:scale-90 shrink-0"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex-1">
          <h2 className="text-[clamp(20px,5vw,24px)] font-extrabold text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
            Rà soát bài làm
          </h2>
          <p className="text-[clamp(12px,3vw,14px)] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.16em] line-clamp-1">
            {topic.title}
          </p>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-10">
        {topic.questions.map((question, qIndex) => {
          const userAnswer = userAnswers[qIndex];
          const questionType = question.type ?? 'single-choice';

          let isCorrect = false;

          if (questionType === 'single-choice') {
            isCorrect = userAnswer === question.correctAnswerIndex;
          } else if (questionType === 'true-false') {
            const tfUserAnswer = Array.isArray(userAnswer) ? userAnswer : [];
            isCorrect =
              question.trueFalseAnswers?.every((ans, idx) => ans === tfUserAnswer[idx]) ?? false;
          } else if (questionType === 'short-answer') {
            isCorrect = normalizeString(String(userAnswer || '')) === normalizeString(question.answerText || '');
          }

          return (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: qIndex * 0.05 }}
              className={`bg-white/88 dark:bg-[#0c1624]/88 backdrop-blur-md p-5 sm:p-6 rounded-[2rem] border shadow-[0_10px_28px_rgba(0,0,0,0.08)] ${
                isCorrect
                  ? 'border-emerald-200 dark:border-emerald-700/20'
                  : 'border-rose-200 dark:border-rose-700/20'
              }`}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-2">
                <div
                  className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-black text-[clamp(13px,3.5vw,14px)] mt-0.5 ${
                    isCorrect
                      ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                      : 'bg-rose-100 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400'
                  }`}
                >
                  {qIndex + 1}
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.18em] border ${
                        isCorrect
                          ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/20'
                          : 'bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-700/20'
                      }`}
                    >
                      {isCorrect ? 'Chính xác' : 'Cần xem lại'}
                    </span>
                  </div>
                  <div className="text-[clamp(16px,4.5vw,18px)] font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    <MathText content={question.text} />
                  </div>
                </div>
              </div>

              {renderQuestionImages(question.images)}

              {questionType === 'single-choice' && (
                <div className="space-y-3 mb-6 mt-6">
                  {question.options.map((option, oIndex) => {
                    const isUserChoice = userAnswer === oIndex;
                    const isActualCorrect = question.correctAnswerIndex === oIndex;
                    const optionImage = question.optionImages?.[oIndex] ?? null;

                    let optionClasses =
                      'w-full text-left p-3 sm:p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ';

                    if (isActualCorrect) {
                      optionClasses +=
                        'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-bold';
                    } else if (isUserChoice && !isActualCorrect) {
                      optionClasses +=
                        'border-rose-500 bg-rose-50/70 dark:bg-rose-500/10 text-rose-800 dark:text-rose-300';
                    } else {
                      optionClasses +=
                        'border-slate-200 dark:border-cyan-900/30 opacity-60 text-slate-500 dark:text-slate-500';
                    }

                    return (
                      <div key={oIndex} className={optionClasses}>
                        <div className="flex-1 min-w-0">
                          <MathText content={option} className="text-[clamp(14px,4vw,16px)] pt-0.5" />

                          {optionImage && (
                            <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 dark:border-cyan-900/40">
                              <img
                                src={optionImage.src}
                                alt={optionImage.alt || `Hình đáp án ${oIndex + 1}`}
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

                        {isActualCorrect && (
                          <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5 sm:mt-1" size={20} />
                        )}
                        {isUserChoice && !isActualCorrect && (
                          <XCircle className="text-rose-500 shrink-0 mt-0.5 sm:mt-1" size={20} />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {questionType === 'true-false' && question.trueFalseStatements && (
                <div className="space-y-3 mb-6 mt-6">
                  {question.trueFalseStatements.map((stmt, idx) => {
                    const tfUserAnswer = Array.isArray(userAnswer) ? userAnswer : [];
                    const uChoice = tfUserAnswer[idx];
                    const aChoice = question.trueFalseAnswers?.[idx];
                    const isChoiceCorrect = uChoice === aChoice;

                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl border-2 flex flex-col sm:flex-row gap-3 ${
                          isChoiceCorrect
                            ? 'border-emerald-200 bg-emerald-50/40 dark:border-emerald-700/20 dark:bg-emerald-500/5'
                            : 'border-rose-200 bg-rose-50/40 dark:border-rose-700/20 dark:bg-rose-500/5'
                        }`}
                      >
                        <div className="flex-1 text-[clamp(14px,4vw,16px)] text-slate-800 dark:text-slate-200">
                          <div className="font-black mb-1 text-cyan-700 dark:text-cyan-300 uppercase tracking-[0.16em] text-xs">
                            Mệnh đề {String.fromCharCode(97 + idx)}
                          </div>
                          <MathText content={stmt} />
                        </div>

                        <div className="flex flex-col gap-2 shrink-0 text-[13px] font-bold">
                          <div
                            className={`px-3 py-1.5 rounded-lg flex items-center justify-between gap-2 ${
                              isChoiceCorrect
                                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300'
                                : 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300'
                            }`}
                          >
                            <span>
                              Bạn chọn: {uChoice === true ? 'Đúng' : uChoice === false ? 'Sai' : 'Trống'}
                            </span>
                            {isChoiceCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                          </div>

                          {!isChoiceCorrect && (
                            <div className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 flex items-center justify-between gap-2">
                              <span>Đáp án: {aChoice ? 'Đúng' : 'Sai'}</span>
                              <CheckCircle2 size={16} />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {questionType === 'short-answer' && (
                <div className="mb-6 mt-6 flex flex-col sm:flex-row gap-4">
                  <div
                    className={`flex-1 p-4 rounded-2xl border-2 text-center ${
                      isCorrect
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300'
                        : 'border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300'
                    }`}
                  >
                    <div className="text-xs uppercase tracking-[0.16em] mb-1 opacity-70 font-bold">Bạn đã nhập</div>
                    <div className="font-black text-xl">{String(userAnswer || '(Để trống)')}</div>
                  </div>

                  {!isCorrect && (
                    <div className="flex-1 p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 text-center">
                      <div className="text-xs uppercase tracking-[0.16em] mb-1 opacity-70 font-bold">Đáp án chính xác</div>
                      <div className="font-black text-xl">{question.answerText}</div>
                    </div>
                  )}
                </div>
              )}

              {question.explanation && (
                <div className="mt-4 sm:mt-6">
                  <div className="bg-slate-50 dark:bg-slate-950/30 p-4 sm:p-5 rounded-[1.5rem] border border-slate-200 dark:border-cyan-900/30">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <div className="w-1.5 h-4 bg-cyan-500 rounded-full"></div>
                      <h4 className="font-black text-slate-900 dark:text-cyan-200 text-[clamp(12px,3vw,14px)] uppercase tracking-[0.16em]">
                        Phân tích đáp án
                      </h4>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-[clamp(13px,3.5vw,15px)] leading-relaxed">
                      <MathText content={question.explanation} />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};