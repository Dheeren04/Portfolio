import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export function ResumeModal({ isOpen, onClose, pdfUrl }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F0D1A]/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 flex flex-col w-full max-w-4xl h-[85vh] rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)] bg-[var(--surface-elevated)]">
            <div className="flex items-center gap-3">
              <span className="font-serif-heading text-lg font-bold text-[var(--text)]">
                Harshitha A — Resume
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--accent)]/12 text-[var(--accent)] font-medium">
                PDF Preview
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={pdfUrl}
                download="Harshitha_A_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border)] text-xs font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200"
                title="Download PDF"
              >
                <Download className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border)] text-xs font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200"
                title="Open in new tab"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">New Tab</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-xl text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-hover)] transition-colors duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 w-full bg-[var(--bg)] p-1">
            <iframe
              src={`${pdfUrl}#view=FitH`}
              title="Harshitha A Resume PDF Preview"
              className="w-full h-full rounded-b-xl border-0"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
