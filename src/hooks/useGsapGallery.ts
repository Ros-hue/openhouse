'use client';

import { RefObject, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapGallery(
  containerRef: RefObject<HTMLElement | null>,
  dependencyKey: string,
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-reveal',
        { y: 72, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 80%',
          },
        },
      );

      gsap.utils.toArray<HTMLElement>('.gallery-parallax').forEach((element) => {
        gsap.fromTo(
          element,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      });

      gsap.fromTo(
        '.gallery-counter',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gallery-stats',
            start: 'top 85%',
          },
        },
      );
    }, container);

    return () => {
      ctx.revert();
    };
  }, [containerRef, dependencyKey]);
}
