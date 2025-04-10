import { createContext, useContext, useEffect, useState } from "react";

type Post = {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
  content: { rendered: string };
  _embedded?: {
    author?: Array<{
      name: string;
      avatar_urls: {
        [key: string]: string;
      };
    }>;
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
};



type BlogContextType = {
  posts: Post[];
  isLoading: boolean;
};

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
