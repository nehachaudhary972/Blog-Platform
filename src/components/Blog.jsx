import React, { useContext } from "react";
import { AppContext } from "../Context/ContextApiImplentation";

export const Blog = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div>
      {posts.length === 0 ? (
        <div>No Blog Found</div>
      ) : (
        <div>
          {posts.map((post) => (
            <div
              className="flex flex-col justify-center items-center"
              key={post.id}
            >
              <h1 className="text-xl mt-4 bg-rose-300 py-5 px-5 outline-none w-[470px] text-center rounded-lg">
                {post.title}
              </h1>
              <p>
                By <span className="italic text-red-500">{post.author}</span> on{" "}
                <span>{post.category}</span>
              </p>
              <div className="flex justify-center items-center bg-gray-100">
                <p className="text-center max-w-2xl p-4 bg-white shadow-lg rounded-lg mb-1">
                  {post.content}
                </p>
              </div>
              <div className="flex flex-row gap-2 text-blue-400 mb-6">
                {post.tags.map((tag, index) => (
                  <p key={index}>#{tag}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
