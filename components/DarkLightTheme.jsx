'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const DarkLightTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="flex pl-8 ">
      {currentTheme === 'dark' ? (
        <button
          className="flex justify-center bg-black hover:bg-black w-14 rounded-md border-grey border-1 p-1"
          onClick={() => setTheme('light')}
        >
          <Image
            src="/assets/icons/sun.svg"
            alt="dark-mode-sun"
            height={25}
            width={25}
          />
        </button>
      ) : (
        <button
          className="flex justify-center bg-black w-14 rounded-md border-grey border-1 p-1 "
          onClick={() => setTheme('dark')}
        >
          <Image
            src="/assets/icons/moon.svg"
            alt="dark-mode-moon"
            height={25}
            width={25}
          />
        </button>
      )}
    </div>
  );
};

export default DarkLightTheme;
