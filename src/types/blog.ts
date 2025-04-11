export type Post = {
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

export type BlogContextType = {
  posts: Post[];
  isLoading: boolean;
};

export type BlogCardProps = {
  id: number;
  title: string;
  slug: string;
  imageUrl?: string;
  date: string;
  authorName: string;
  authorAvatar?: string;
};

