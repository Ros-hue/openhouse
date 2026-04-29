'use client';

import { motion } from 'framer-motion';
import type { GalleryCategory } from '@/lib/fleaMarketGallery';

type FiltersProps = {
  categories: GalleryCategory[];
  activeCategory: GalleryCategory;
  onSelect: (category: GalleryCategory) => void;
};

export default function Filters({
  categories,
  activeCategory,
  onSelect,
}: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`relative overflow-hidden rounded-full border px-4 py-2 text-xs uppercase tracking-[0.28em] transition-colors sm:px-5 ${
              isActive
                ? 'border-white/30 bg-white text-black'
                : 'border-white/15 bg-white/5 text-white/70 hover:border-white/25 hover:text-white'
            }`}
            type="button"
          >
            {isActive ? (
              <motion.span
                layoutId="gallery-filter-pill"
                className="absolute inset-0 rounded-full bg-white"
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              />
            ) : null}
            <span className={`relative z-10 font-['OSK'] ${isActive ? 'text-black' : ''}`}>
              {category}
            </span>
          </button>
        );
      })}
    </div>
  );
}
