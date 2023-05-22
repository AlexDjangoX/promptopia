'use client';

import { useState, useEffect } from 'react';

import PromptCard from './PromptCard';

const PromptCardList = ({ allPosts, handleTagClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allPosts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="w-full flex justify-around pt-4 ">
        <button
          className="w-34 px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span>
          Page {currentPage} of {Math.ceil(allPosts.length / 10)}
        </span>
        <button
          className="w-34 px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currentPage === Math.ceil(allPosts.length / itemsPerPage)}
        >
          Next Page
        </button>
      </div>
      <div className="mt-16 prompt_layout">
        {currentItems.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    </>
  );
};

const Feed = () => {
  let [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch('/api/prompt');
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, 'i');
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center text-gray-800">
        <input
          type="text"
          placeholder="Search for a tag, user name or key word"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {searchText && searchedResults.length === 0 ? (
        <h1>There are no posts matching your search</h1>
      ) : null}
      {searchText ? (
        <PromptCardList
          allPosts={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList allPosts={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
