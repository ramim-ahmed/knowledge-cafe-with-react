/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
export default function Blog({ blog, handleMarkReadBlog }) {
  const {
    id,
    cover,
    title,
    author_avatar,
    author_name,
    posted_date,
    read_time,
    tags,
  } = blog;
  return (
    <div className="border-b mb-4">
      <div>
        <img src={cover} alt="" />
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={author_avatar}
            alt=""
          />
          <div className="ml-4">
            <p className="text-lg font-bold">{author_name}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <p>{read_time} min read</p>
          <p
            className="cursor-pointer"
            onClick={() => handleMarkReadBlog(id, title, read_time)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div className="mt-4 flex items-center space-x-5">
        {tags?.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
      <div className="mt-4 mb-4">
        <button className="border-b font-medium border-[#6047EC] text-[#6047EC]">
          Mark as read
        </button>
      </div>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleMarkReadBlog: PropTypes.func.isRequired,
};
