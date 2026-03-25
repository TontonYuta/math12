import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Trophy, RotateCcw, Home, FileText, CloudUpload, CheckCircle, AlertCircle, Star } from 'lucide-react';
import { syncScoreToSheet } from '../services/googleSheets';
import { APP_VERSION } from '../config';

interface ResultProps {
  score: number;
  total: number;
  topicTitle: string;
  onRetry: () => void;
  onHome: () => void;
  onReview: () => void;
}

export const Result: React.FC<ResultProps> = ({ score, total, topicTitle, onRetry, onHome, onReview }) => {
  const percentage = Math.round((score / total) * 100);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');
  const [syncMessage, setSyncMessage] = useState('');
  const hasSynced = useRef(false);

  useEffect(() => {
    const syncData = async () => {
      if (hasSynced.current) return;
      hasSynced.current = true;

      setSyncStatus('syncing');
      const studentName = localStorage.getItem('studentName') || 'Học viên ẩn danh';
      const result = await syncScoreToSheet(studentName, topicTitle, score, total, APP_VERSION);

      if (result.success) {
        setSyncStatus('success');
      } else {
        setSyncStatus('error');
        setSyncMessage(result.message);
      }
    };

    syncData();
  }, [score, total, topicTitle]);

  let message = '';
  let color = '';
  let badgeText = '';
  let badgeStyle = '';
  let stars = 0;

  if (percentage >= 80) {
    message = 'Hiệu suất rất tốt. Bạn đã nắm chắc nội dung của chuyên đề này.';
    color = 'text-emerald-600 dark:text-emerald-400';
    badgeText = 'Xếp hạng cao';
    badgeStyle =
      'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/30';
    stars = 3;
  } else if (percentage >= 50) {
    message = 'Kết quả ổn định. Chỉ cần rà soát thêm một vài phần để cải thiện.';
    color = 'text-cyan-700 dark:text-cyan-300';
    badgeText = 'Đạt yêu cầu';
    badgeStyle =
      'bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/40';
    stars = 2;
  } else {
    message = 'Cần củng cố thêm kiến thức nền. Hãy xem lại bài và thử lại lần nữa.';
    color = 'text-amber-600 dark:text-amber-400';
    badgeText = 'Cần ôn tập';
    badgeStyle =
      'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700/30';
    stars = 1;
  }

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 min-h-[85vh] flex flex-col items-center justify-center text-center antialiased">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="w-full"
      >
        <div className="bg-white/88 dark:bg-[#0c1624]/88 backdrop-blur-md p-6 sm:p-8 rounded-[2.5rem] shadow-[0_18px_40px_rgba(0,0,0,0.12)] border border-slate-200/80 dark:border-cyan-900/40 w-full relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.10),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.10),_transparent_30%)]" />

          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-[0_10px_22px_rgba(14,165,233,0.30)] border border-cyan-200/20">
              <Trophy className="text-white w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-4 ${badgeStyle}`}>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">{badgeText}</span>
            </div>

            <h2 className="text-[clamp(24px,6vw,30px)] font-extrabold text-slate-900 dark:text-slate-50 mb-2 tracking-tight">
              Kết quả đánh giá
            </h2>

            <p className={`text-[clamp(14px,4vw,16px)] font-semibold mb-5 text-wrap balance ${color}`}>
              {message}
            </p>

            <div className="flex items-center justify-center gap-1.5 mb-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < stars ? 'text-amber-500 fill-amber-500' : 'text-slate-300 dark:text-slate-700'}
                />
              ))}
            </div>

            <div className="flex justify-center items-baseline gap-2 mb-4">
              <span className="text-[clamp(60px,18vw,80px)] leading-none font-black text-slate-900 dark:text-slate-50 tracking-tighter">
                {score}
              </span>
              <span className="text-[clamp(20px,5vw,24px)] font-bold text-slate-300 dark:text-slate-600">
                / {total}
              </span>
            </div>

            <div className="mb-8">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-2">
                Tỷ lệ hoàn thành: {percentage}%
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200/70 dark:border-slate-700">
                <div
                  className={`h-full transition-all duration-700 ${
                    percentage >= 80
                      ? 'bg-gradient-to-r from-emerald-500 to-lime-400'
                      : percentage >= 50
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                        : 'bg-gradient-to-r from-amber-500 to-orange-500'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-50/90 dark:bg-slate-950/30 rounded-2xl border border-slate-200/70 dark:border-cyan-900/30">
              {syncStatus === 'syncing' && (
                <>
                  <CloudUpload size={16} className="text-cyan-500 animate-pulse shrink-0" />
                  <span className="text-[clamp(10px,3vw,12px)] font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-widest whitespace-nowrap">
                    Đang đồng bộ kết quả...
                  </span>
                </>
              )}
              {syncStatus === 'success' && (
                <>
                  <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-[clamp(10px,3vw,12px)] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest whitespace-nowrap">
                    Đã lưu thành công
                  </span>
                </>
              )}
              {syncStatus === 'error' && (
                <>
                  <AlertCircle size={16} className="text-amber-500 shrink-0" />
                  <span className="text-[clamp(10px,3vw,12px)] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest whitespace-nowrap">
                    {syncMessage ? 'Đồng bộ thất bại' : 'Lỗi kết nối'}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-full mt-6 sm:mt-8 space-y-3">
        <button
          onClick={onReview}
          className="w-full py-4 px-4 sm:px-6 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 hover:from-cyan-700 hover:via-sky-700 hover:to-blue-800 text-white text-[clamp(15px,4vw,16px)] font-bold rounded-2xl shadow-[0_10px_24px_rgba(14,165,233,0.28)] flex items-center justify-center gap-3 transition-all active:scale-[0.97]"
        >
          <FileText size={20} className="shrink-0" />
          <span className="truncate">Xem lại bài làm</span>
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onRetry}
            className="py-3 sm:py-4 px-2 sm:px-4 bg-white/88 dark:bg-[#0c1624]/88 text-slate-700 dark:text-slate-200 text-[clamp(14px,3.5vw,16px)] font-bold rounded-2xl border border-slate-200 dark:border-cyan-900/40 flex items-center justify-center gap-2 transition-all active:scale-[0.97] hover:bg-slate-50 dark:hover:bg-slate-900/20"
          >
            <RotateCcw size={18} className="shrink-0" />
            <span className="truncate">Làm lại</span>
          </button>

          <button
            onClick={onHome}
            className="py-3 sm:py-4 px-2 sm:px-4 bg-white/88 dark:bg-[#0c1624]/88 text-slate-700 dark:text-slate-200 text-[clamp(14px,3.5vw,16px)] font-bold rounded-2xl border border-slate-200 dark:border-cyan-900/40 flex items-center justify-center gap-2 transition-all active:scale-[0.97] hover:bg-slate-50 dark:hover:bg-slate-900/20"
          >
            <Home size={18} className="shrink-0" />
            <span className="truncate">Trang chủ</span>
          </button>
        </div>
      </div>
    </div>
  );
};