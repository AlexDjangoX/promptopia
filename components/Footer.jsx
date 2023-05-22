import React from 'react';

const Footer = () => {
  return (
    <footer className="sticky bottom-[-0px] w-full  pt-2 pb-2 z-50 bg-white dark:bg-gray-800">
      <div class="p-4 flex flex-col justify-center items-center text-center">
        <span class="text-sm text-gray-800 dark:text-gray-400">
          © 2023{' '}
          <a href="https://portfolio-alexander-mclachlan.vercel.app/">
            Website Created by - Alexander McLachlan
          </a>
          .
        </span>
        <span>All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
