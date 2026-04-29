'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { GalleryItem } from '@/lib/fleaMarketGallery';

type GalleryGridProps = {
  items: GalleryItem[];
  onItemClick: (id: number) => void;
};

const sizeClasses: Record<GalleryItem['size'], string> = {
  sm: 'aspect-[4/5]',
  md: 'aspect-[4/4.8]',
  lg: 'aspect-[4/6]',
};

export default function GalleryGrid({ items, onItemClick }: GalleryGridProps) {
  return (
    <div className="gallery-grid columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*:not(:first-child)]:mt-5">
      {items.map((item, index) => (
        <motion.button
          key={item.id}
          type="button"
          onClick={() => onItemClick(item.id)}
          className="gallery-reveal group relative block w-full break-inside-avoid overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 text-left shadow-[0_24px_64px_rgba(0,0,0,0.24)]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.03 }}
          whileHover={{ rotateX: 4, rotateY: -4, y: -6 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className={`gallery-parallax relative ${sizeClasses[item.size]} overflow-hidden`}>
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${item.accent} opacity-80 transition-opacity duration-500 group-hover:opacity-95`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_48%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="rounded-[1.35rem] border border-white/14 bg-black/35 p-4 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-white/70">
                  {item.category}
                </span>
                <span className="rounded-full bg-white/10 p-2 text-white/90">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <h3 className="font-['BS'] text-2xl uppercase leading-none text-[#FF8A00]">
                {item.title}
              </h3>
              <p className="mt-3 font-['OSK'] text-[11px] uppercase leading-5 tracking-[0.18em] text-white/72">
                {item.caption}
              </p>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
