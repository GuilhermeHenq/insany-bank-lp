import { createContext, useContext, useEffect, useState } from "react";
import { Post, BlogContextType } from "@/types/blog";


const BlogContext = createContext<BlogContextType>({ posts: [], isLoading: true });

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("https://devblog.insanydesign.com/wp-json/wp/v2/posts?_embed");  
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setIsLoading(false);
      }
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
