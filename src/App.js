import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/ContextApiImplentation";

export default function App() {
  // 3. consumers
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div>
      <Header />
      <Blog />
      <Footer />
    </div>
  );
}
