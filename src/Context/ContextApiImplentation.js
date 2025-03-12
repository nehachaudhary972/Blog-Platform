import React, { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { baseUrl } from "../baseUrl";
// 1. create context api
export const AppContext = createContext();

export default function ContextApiImplentation({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  //data filling
  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const data = await axios.get(url);
      // console.log(response);
      // const data = await response.json();
      console.log(data);
      setPage(data.data.page);
      setPosts(data.data.posts);
      setTotalPages(data.data.totalPages);
    } catch (error) {
      console.log("error in fetching posts", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }

    setLoading(false);
  }
  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    posts,
    setPosts,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  //    2 provider
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
