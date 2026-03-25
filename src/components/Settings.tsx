import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Moon, Sun, Trash2, AlertTriangle } from 'lucide-react';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onResetProgress: () => void;
}

export const Settings: React.FC<SettingsProps> = ({
  isOpen,
  onClose,
  isDarkMode,
  onToggleDarkMode,
  onResetProgress,
}) => {
  const [showConfirmReset, setShowConfirmReset] = React.useState(false);

  if (!isOpen) return null;

  const handleReset = () => {
    onResetProgress();
    setShowConfirmReset(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/45 dark:bg-black/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white/92 dark:bg-[#0c1624]/92 backdrop-blur-md w-full max-w-sm rounded-[2.5rem] shadow-[0_18px_40px_rgba(0,0,0,0.18)] overflow-hidden border border-slate-200/80 dark:border-cyan-900/40 flex flex-col max-h-[90vh]"
      >
        <div className="flex items-center justify-between p-5 sm:p-6 pb-2 shrink-0">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300 mb-1">
              Control panel
            </p>
            <h2 className="text-[clamp(20px,5vw,24px)] font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
              Cài đặt hệ thống
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:text-cyan-700 dark:hover:text-cyan-300 rounded-full transition-all active:scale-90 shrink-0"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-5 sm:p-6 pt-4 space-y-6 sm:space-y-8 overflow-y-auto">
          <div className="rounded-[1.75rem] border border-slate-200 dark:border-cyan-900/30 bg-slate-50/80 dark:bg-slate-950/20 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-[clamp(16px,4vw,18px)] font-bold text-slate-900 dark:text-slate-50">
                  Giao diện hiển thị
                </h3>
                <p className="text-[clamp(12px,3.5vw,14px)] text-slate-500 dark:text-slate-400 font-medium line-clamp-2">
                  Chuyển giữa chế độ sáng và chế độ tối.
                </p>
              </div>

              <button
                onClick={onToggleDarkMode}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 shrink-0 border ${
                  isDarkMode
                    ? 'bg-cyan-600 border-cyan-500'
                    : 'bg-slate-200 border-slate-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${
                    isDarkMode ? 'translate-x-7' : 'translate-x-1'
                  }`}
                >
                  {isDarkMode ? (
                    <Moon size={14} className="text-cyan-700" />
                  ) : (
                    <Sun size={14} className="text-amber-500" />
                  )}
                </span>
              </button>
            </div>
          </div>

          <div className="h-px bg-slate-200 dark:bg-cyan-950/40" />

          <div>
            <div className="mb-5 sm:mb-6">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-rose-600 dark:text-rose-400 mb-1">
                Data management
              </p>
              <h3 className="text-[clamp(16px,4vw,18px)] font-bold text-slate-900 dark:text-slate-50 mb-1">
                Quản lý dữ liệu
              </h3>
              <p className="text-[clamp(12px,3.5vw,14px)] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Xóa toàn bộ tiến trình học tập và thành tích đã mở khóa. Hành động này không thể hoàn tác.
              </p>
            </div>

            {!showConfirmReset ? (
              <button
                onClick={() => setShowConfirmReset(true)}
                className="w-full py-3.5 sm:py-4 px-4 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[clamp(14px,4vw,16px)] font-bold rounded-2xl border border-rose-200 dark:border-rose-700/20 flex items-center justify-center gap-2 transition-all active:scale-95 hover:bg-rose-100 dark:hover:bg-rose-500/15"
              >
                <Trash2 size={20} className="shrink-0" />
                <span className="truncate">Xóa toàn bộ dữ liệu</span>
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-rose-50 dark:bg-rose-500/10 p-4 sm:p-5 rounded-[2rem] border border-rose-200 dark:border-rose-700/20"
              >
                <div className="flex items-start gap-3 mb-4 sm:mb-5 text-rose-800 dark:text-rose-300">
                  <AlertTriangle size={24} className="shrink-0 text-rose-500 mt-0.5" />
                  <p className="text-[clamp(12px,3.5vw,14px)] font-bold leading-tight">
                    Xác nhận xóa dữ liệu? Toàn bộ tiến trình và thành tích sẽ bị đặt lại từ đầu.
                  </p>
                </div>

                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={() => setShowConfirmReset(false)}
                    className="flex-1 py-2.5 sm:py-3 px-2 sm:px-4 bg-white dark:bg-slate-900/40 text-slate-700 dark:text-slate-200 text-[clamp(13px,3.5vw,15px)] font-bold rounded-xl border border-slate-200 dark:border-cyan-900/30 transition-all active:scale-95 truncate"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex-1 py-2.5 sm:py-3 px-2 sm:px-4 bg-gradient-to-r from-rose-500 to-red-600 text-white text-[clamp(13px,3.5vw,15px)] font-bold rounded-xl shadow-[0_10px_22px_rgba(244,63,94,0.22)] transition-all active:scale-95 truncate"
                  >
                    Xác nhận
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="py-5 shrink-0 text-center bg-slate-50/70 dark:bg-slate-950/20 border-t border-slate-200 dark:border-cyan-900/30">
          <p className="text-[clamp(9px,2.5vw,10px)] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.22em]">
            Designed by TontonYuta
          </p>
        </div>
      </motion.div>
    </div>
  );
};