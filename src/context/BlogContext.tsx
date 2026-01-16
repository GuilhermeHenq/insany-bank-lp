import { createContext, useContext, useEffect, useState } from "react";
import { Post, BlogContextType } from "@/types/blog";


const BlogContext = createContext<BlogContextType>({ posts: [], isLoading: true });

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setPosts([]); // deixa o blog vazio
    }

    fetchPosts();
  }, []);

  return (
    <BlogContext.Provider value={{ posts, isLoading }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
