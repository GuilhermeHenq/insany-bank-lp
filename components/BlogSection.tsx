import styled from "styled-components";
import { useBlog } from "@/context/BlogContext";
import BlogCard from "./BlogCard";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Section = styled.section`
  padding: 120px 112px;
  background-color: #f1f4ff;
`;

const Heading = styled.div`
  margin-bottom: 60px;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #0d081a;
  }

  span {
    color: #1d63ff;
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    font-family: "Archivo", sans-serif;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowGroup = styled.div`
  display: flex;
  gap: 33px;

  button {
    all: unset;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 10px;
      height: 20px;
    }
  }
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 280px);
  gap: 32px;
  justify-content: center;
`;

const PaginationDots = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 8px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #cdd5e0;

    &.active {
      background: #1d63ff;
    }
  }
`;

const Icon = styled.img`
  width: 10px;
  height: 20px;
  flex-shrink: 0;
`;

export default function BlogSection() {
  const { posts, isLoading } = useBlog();
  const [page, setPage] = useState(0);
  const postsPerPage = 4;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const paginatedPosts = posts.slice(
    page * postsPerPage,
    page * postsPerPage + postsPerPage
  );

  return (
    <Section>
      <TopWrapper>
        <Heading>
          <span>Nosso blog</span>
          <h2>Notícias do mundo da tecnologia</h2>
        </Heading>

        <ArrowGroup>
          <button onClick={() => setPage((p) => Math.max(p - 1, 0))}>
            <Icon src="/icons/Arrow-left.svg" alt="Ícone duvidas" />
          </button>
          <button onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}>
            <Icon src="/icons/Arrow-right.svg" alt="Ícone duvidas" />
          </button>
        </ArrowGroup>
      </TopWrapper>

      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <Grid>
            {paginatedPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title.rendered}
                slug={post.slug}
                imageUrl={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                date={post.date}
                authorName={post._embedded?.author?.[0]?.name || "Desconhecido"}
                authorAvatar={post._embedded?.author?.[0]?.avatar_urls?.["96"]}
              />
            ))}
          </Grid>

          <PaginationDots>
            {Array.from({ length: totalPages }).map((_, index) => (
              <span key={index} className={index === page ? "active" : ""} />
            ))}
          </PaginationDots>
        </>
      )}
    </Section>
  );
}
