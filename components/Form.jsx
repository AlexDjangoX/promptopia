'use client';

import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const maxChars = 250;

  const handleInputChange = (e) => {
    if (e.target.value.length <= maxChars) {
      setPost({ ...post, prompt: e.target.value });
    }
  };

  return (
    <section className="w-4/5 mx-auto flex-center flex-col justify-center ">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share your content about interesting aspects of Polish
        language, and your journey.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <div className="flex align-cente font-satoshi font-semibold text-base text-gray-700 dark:text-gray-200 ">
            <span className="pr-6">Your post here</span>
            <span className="font-normal">
              {maxChars - post.prompt.length} (Characters remaining)
            </span>
          </div>
          <textarea
            value={post.prompt}
            onChange={handleInputChange}
            placeholder="Write your post here"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <div className="flex align-cente font-satoshi font-semibold text-base text-gray-700  dark:text-gray-200">
            <span className="pr-6">Tag your topic</span>
            <span className="font-normal">
              (#aspect, #verbs, #introduce-yourself, etc.)
            </span>
          </div>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm  dark:text-gray-200">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
