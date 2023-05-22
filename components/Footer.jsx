import React from 'react';

const Footer = () => {
  return (
    <footer className="sticky bottom-[-0px] w-full  pt-2 pb-2 z-50 bg-gradient-to-r from-orange-400 from-10% via-yellow-500 via-30% to-red-100 to-90%  dark:bg-gray-800 ">
      <div class="p-4 flex flex-col justify-center items-center text-center">
        <span class="text-sm text-black ">
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
