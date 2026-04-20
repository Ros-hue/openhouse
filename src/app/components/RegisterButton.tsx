'use client';

import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { getRegistrationHash, scrollToRegistrationSection } from '@/lib/scrollToRegistration';

type RegisterButtonProps = {
  children?: ReactNode;
  className?: string;
  disableAnimation?: boolean;
  label?: string;
};

export default function RegisterButton({
  children,
  className = '',
  disableAnimation = false,
  label = 'Register',
}: RegisterButtonProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (pathname === '/') {
      scrollToRegistrationSection();
      return;
    }

    router.push(`/${getRegistrationHash()}`);
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={disableAnimation ? undefined : { scale: 1.02 }}
      whileTap={disableAnimation ? undefined : { scale: 0.98 }}
      className={className}
    >
      {children ?? label}
    </motion.button>
  );
}
