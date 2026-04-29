'use client';

import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryItem } from '@/lib/fleaMarketGallery';
import { useEffect } from 'react';

type LightboxProps = {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (direction: 1 | -1) => void;
};

export default function Lightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNavigate(1);
      if (event.key === 'ArrowLeft') onNavigate(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeItem, onClose, onNavigate]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -80) {
      onNavigate(1);
    } else if (info.offset.x > 80) {
      onNavigate(-1);
    }
  };

  return (
    <AnimatePresence>
      {activeItem ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
          >
            <X className="h-5 w-5" />
          </motion.button>

          <motion.div
            key={activeItem.id}
            className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-[0_40px_120px_rgba(0,0,0,0.45)] lg:flex-row"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <div className="relative min-h-[340px] flex-1 bg-black/40 sm:min-h-[480px]">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 70vw"
                priority
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${activeItem.accent} opacity-60`} />
            </div>

            <div className="flex w-full flex-col justify-between gap-8 bg-black/35 p-6 text-white lg:w-[340px] lg:p-8">
              <div className="space-y-4">
                <div className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-white/70">
                  {activeItem.category}
                </div>
                <h3 className="font-['BS'] text-3xl uppercase leading-tight text-[#FF8A00]">
                  {activeItem.title}
                </h3>
                <p className="font-['OSK'] text-sm uppercase leading-6 tracking-[0.18em] text-white/68">
                  {activeItem.caption}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate(-1)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] transition hover:bg-white/20"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate(1)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] transition hover:bg-white/20"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
