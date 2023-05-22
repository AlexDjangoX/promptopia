'use client';

import Feed from '@components/Feed.jsx';

const Home = () => (
  <section className="w-[90%] flex-center flex-col">
    <h1 className="head_text text-center ">
      Explore & Discover
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">
        {' '}
        Polish language with Janusz
      </span>
    </h1>
    <p className="desc text-center">
      This is as much your Blog as it is mine. Please share your experiences,
      difficulties and insights with your classmates.
    </p>
    <Feed />
  </section>
);

export default Home;
