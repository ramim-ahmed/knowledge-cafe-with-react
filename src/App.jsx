import { useState } from "react";
import Blog from "./components/Blog";
import Blogs from "./components/Blogs";
import BookMarks from "./components/BookMarks";
import Header from "./components/Header";
import { useEffect } from "react";

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [markBookLists, setMarkBookLists] = useState([]);
  const [readTime, setReadTime] = useState(0);
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/db/blogs.json");
      const data = await res.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const handleMarkReadBlog = (id, title, read_time) => {
    setMarkBookLists([...markBookLists, { id, title, read_time }]);
    setReadTime((prev) => prev + read_time);
  };
  const removeMarkAsReadList = (id) => {
    const filterAbleProducts = markBookLists.filter((list) => list.id !== id);
    const spentTime = filterAbleProducts.reduce((total, current) => {
      return total + current.read_time;
    }, 0);
    setReadTime(spentTime);
    setMarkBookLists([...filterAbleProducts]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Header />
      <div className="grid grid-cols-12 gap-6 mt-8 px-3">
        <div className="md:col-span-8 col-span-12">
          <Blogs>
            <>
              {blogs?.map((blog) => (
                <Blog
                  key={blog.id}
                  blog={blog}
                  handleMarkReadBlog={handleMarkReadBlog}
                />
              ))}
            </>
          </Blogs>
        </div>
        <div className="md:col-span-4 col-span-12">
          <BookMarks
            markBookLists={markBookLists}
            removeMarkAsReadList={removeMarkAsReadList}
            readTime={readTime}
          />
        </div>
      </div>
    </div>
  );
}
