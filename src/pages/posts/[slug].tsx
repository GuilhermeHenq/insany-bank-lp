import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Post } from "@/types/blog";

const PostWrapper = styled.main`
  background: white;
  margin: 0 auto;
  padding: 64px 320px;
  z-index: 0; 

  @media (max-width: 1024px) {
    padding: 64px 64px;
  }

  @media (max-width: 768px) {
    padding: 48px 24px;
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.4;
    color: #2C343E;
    margin: 24px 0;
  }

  article {
    font-size: 18px;
    line-height: 1.7;
    color: #596573;

    h2, h3 {
      font-size: 24px;
      font-weight: 700;
      color: #2C343E;
      margin-top: 40px;
      margin-bottom: 12px;
    }

    strong {
      font-size: 28px;
      font-weight: 700;
      color: #2C343E;
    }

    p {
      margin-bottom: 20px;
    }

    a {
      color: #1d63ff;
      text-decoration: underline;

      &:hover {
        color: #000;
      }
    }

    iframe {
      margin: 40px 0;
      max-width: 100%;
    }
  }
`;

const BackLink = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #596573;
  cursor: pointer;
  margin-bottom: 8px;
  position: relative;
  left: -208px;

  img {
    width: 14px;
    height: 14px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Breadcrumb = styled.div`
  font-size: 14px;
  color: #596573;
  margin-bottom: 16px;

  a {
    text-decoration: none;
    color: #1d63ff;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Tag = styled.span`
  background-color: #1d63ff;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 16px;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #596573;
  margin-bottom: 32px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 32px 0;
`;

const InfoBox = styled.div`
  background-color: rgba(196, 201, 207, 0.2);
  padding: 28px 40px;
  font-size: 18px;
  color: #596573;
  border-radius: 6px;
  margin-bottom: 44px;
`;

const CustomList = styled.ul`
  margin-top: 40px;

  li {
    list-style: none;
    position: relative;
    padding-left: 20px;
    margin-bottom: 12px;
    color: #2C343E;

    &::before {
      content: "";
      width: 5px;
      height: 5px;
      background-color: #2C91AD;
      position: absolute;
      left: 0;
      top: 9px;
      border-radius: 2px;
    }
  }
`;


type PostPageProps = {
  post: Post;
};

export default function PostPage({ post }: PostPageProps) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  if (router.isFallback) {
    return <p>Carregando conteúdo...</p>;
  }

  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const author = post._embedded?.author?.[0];
  const authorName = author?.name ?? "Autor Desconhecido";
  const authorAvatar = author?.avatar_urls?.["48"] ?? "/images/avatar-1.png";

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;

  const ListItems = [
    "Lorem ipsum dolor sit amet",
    "In mauris malesuada nisl laoreet",
    "Pellentesque ut quam eget",
    "Vestibulum fermentum",
    "Curabitur at justo nec arcu dictum",
  ];

  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
      </Head>

      <Header isScrolled={isScrolled} />
      {isScrolled && <div style={{ height: "96px" }} />}

      <PostWrapper>
        <BackLink onClick={() => router.back()}>
          <img src="/icons/home.svg" alt="Home" />
          Voltar
        </BackLink>

        <Breadcrumb>
          <a href="/"><img src="/icons/home.svg" alt="home" /></a> / <a href="/blog">Artigos</a> / {post.title.rendered}
        </Breadcrumb>

        <Tag>Desenvolvimento</Tag>

        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        <AuthorInfo>
          <img src={authorAvatar} alt={authorName} />
          <span>Por {authorName} • {formattedDate}</span>
        </AuthorInfo>

        {featuredImage && (
          <BannerImage src={featuredImage} alt="Imagem destacada do post" />
        )}

        <InfoBox>
          Você já ouviu falar na utilização de manual de atendimento ao cliente na advocacia? É um documento que aborda os principais pontos de dúvida do relacionamento do cliente com o advogado ou escritório e que visa esclarecer, desde já, como esse relacionamento irá funcionar.
        </InfoBox>

        <CustomList>
          {ListItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </CustomList>

        <article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />


      </PostWrapper>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://devblog.insanydesign.com/wp-json/wp/v2/posts?_embed");
  const posts = await res.json();

  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const res = await fetch(`https://devblog.insanydesign.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  const posts = await res.json();
  const post = posts[0];

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
