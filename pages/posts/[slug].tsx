import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@/components/Header";
import { getPostBySlug, getAllPosts } from "@/services/api";

type Post = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
};

type PostPageProps = {
  post: Post;
};

export default function PostPage({ post }: PostPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando conteúdo...</p>;
  }

  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
      </Head>

      <Header />

      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <article
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          style={{ lineHeight: "1.6", marginTop: "1rem" }}
        />
      </main>
    </>
  );
}

// --- Gera todas as páginas com base nos slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
};

// --- Busca o conteúdo do post por slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // revalida a cada minuto
  };
};
