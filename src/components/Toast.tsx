import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, AlertTriangle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'warning' | 'info' | 'error';
  title: string;
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

export default function ToastContainer({ toasts, onRemove }: ToastProps) {
  return (
    <div 
      id="toast-layer"
      className="fixed bottom-6 right-6 z-55 flex flex-col gap-3 max-w-sm w-full pointer-events-none"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
  );
}

interface ToastItemProps {
  key?: string;
  toast: ToastMessage;
  onRemove: (id: string) => void;
}

function ToastItem({ toast, onRemove }: ToastItemProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id);
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast.id, onRemove]);

  const icons = {
    success: <Check className="w-4 h-4 text-emerald-500" />,
    warning: <AlertTriangle className="w-4 h-4 text-amber-500" />,
    info: <Info className="w-4 h-4 text-blue-500" />,
    error: <X className="w-4 h-4 text-rose-500" />
  };

  const borderColors = {
    success: 'border-emerald-500',
    warning: 'border-amber-500',
    info: 'border-blue-500',
    error: 'border-rose-500'
  };

  const tags = {
    success: 'SUCCESS',
    warning: 'WARNING',
    info: 'NOTICE',
    error: 'SYSTEM ERROR'
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }}
      className={`pointer-events-auto bg-white border-l-4 ${borderColors[toast.type]} border-2 border-stone-900 rounded-sm p-4 shadow-xl flex gap-3 items-start select-none`}
    >
      <div className="mt-0.5 flex-shrink-0 bg-stone-50 border border-stone-200 p-1.5 rounded-sm">
        {icons[toast.type]}
      </div>
      
      <div className="flex-grow text-left space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] font-extrabold text-stone-500 uppercase tracking-wider">
            [{tags[toast.type]}]
          </span>
          <span className="font-sans font-bold text-stone-900 text-xs">
            {toast.title}
          </span>
        </div>
        <p className="font-sans text-[11px] text-stone-605 leading-relaxed font-light">
          {toast.message}
        </p>
      </div>

      <button 
        onClick={() => onRemove(toast.id)}
        className="text-stone-400 hover:text-stone-900 transition-colors p-0.5 cursor-pointer flex-shrink-0"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}
