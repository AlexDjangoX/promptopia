import React from 'react';

const PostDateTime = ({ dateTimeString }) => {
  const date = new Date(dateTimeString);

  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  return (
    <div className="flex ">
      <div className="text-sm text-gray-600 dark:text-gray-300 pr-6 ">
        {dateString}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300">
        {timeString}
      </div>
    </div>
  );
};

export default PostDateTime;
