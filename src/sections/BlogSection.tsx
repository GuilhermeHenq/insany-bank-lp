import styled from "styled-components";
import { useBlog } from "@/context/BlogContext";
import BlogCard from "../components/BlogCard";
import { useState, useEffect, useRef } from "react";

const Section = styled.section`
  padding: 120px 112px;
  background-color: #f1f4ff;

  @media (max-width: 768px) {
    padding: 48px 0;
  }
`;

const Heading = styled.div`
  margin-bottom: 60px;

  span {
    color: #1d63ff;
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    font-family: "Archivo", sans-serif;

    @media (max-width: 768px) {
      display: none;
    }
  }

  h2 {
    font-size: 40px;
    font-weight: bold;
    color: #0d081a;
    margin-top: 13px;

    @media (max-width: 768px) {
      font-size: 24px;
      text-align: center;
      margin-top: -23px;
      margin-bottom: 29px;
      width: 238px;
    }
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ArrowGroup = styled.div`
  display: flex;
  gap: 33px;

  button {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 10px;
      height: 20px;
    }
  }

  @media (max-width: 768px) {
    display: none
  }
`;

const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;


  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding-left: 46px;
    padding-right: 24px;
  }

  @media (min-width: 769px) {
    overflow: visible;
    padding: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 280px);
  gap: 32px;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    min-width: fit-content;

    & > * {
      scroll-snap-align: start;
      flex-shrink: 0;
      width: 280px;
    }
  }
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

  @media (max-width: 768px) {
    margin-top: 10px;
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
  const [isMobile, setIsMobile] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const [mobilePage, setMobilePage] = useState(0);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;

    const scrollLeft = mobileScrollRef.current.scrollLeft;
    const cardWidth = 280 + 32;
    const currentIndex = Math.round(scrollLeft / cardWidth);

    setMobilePage(currentIndex);
  };


  const postsPerPageDesktop = 4;

  const postsPerPage = postsPerPageDesktop;
  const totalPages = isMobile
    ? posts.length
    : Math.ceil(posts.length / postsPerPage);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && mobileScrollRef.current) {
      mobileScrollRef.current.scrollLeft = 0;
    }
  }, [isMobile]);

  const handleScrollMobile = (direction: "left" | "right") => {
    if (!mobileScrollRef.current) return;

    const scrollAmount = 280 + 24;
    const currentScroll = mobileScrollRef.current.scrollLeft;
    const newScroll =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    mobileScrollRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  return (
    <Section>
      <TopWrapper>
        <Heading>
          <span>Nosso blog</span>
          <h2>Notícias do mundo da tecnologia</h2>
        </Heading>

        <ArrowGroup>
          <button
            onClick={
              isMobile
                ? () => handleScrollMobile("left")
                : () => setPage((p) => Math.max(p - 1, 0))
            }
          >
            <Icon src="/icons/Arrow-left.svg" alt="Anterior" />
          </button>
          <button
            onClick={
              isMobile
                ? () => handleScrollMobile("right")
                : () => setPage((p) => Math.min(p + 1, totalPages - 1))
            }
          >
            <Icon src="/icons/Arrow-right.svg" alt="Próximo" />
          </button>
        </ArrowGroup>
      </TopWrapper>

      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {isMobile ? (
            <ScrollWrapper ref={mobileScrollRef} onScroll={handleMobileScroll}>
              <Grid as="div">
                <div style={{ width: "12px", flexShrink: 0 }} />
                {posts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    postId={post.id}
                    title={post.title.rendered}
                    slug={post.slug}
                    imageUrl={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                    date={post.date}
                    authorName={post._embedded?.author?.[0]?.name || "Desconhecido"}
                    authorAvatar={post._embedded?.author?.[0]?.avatar_urls?.["96"]}
                  />
                ))}
              </Grid>
            </ScrollWrapper>


          ) : (
            <>
              <Grid>
                {posts
                  .slice(
                    page * postsPerPage,
                    page * postsPerPage + postsPerPage
                  )
                  .map((post) => (
                    <BlogCard
                      key={post.id}
                      postId={post.id}
                      title={post.title.rendered}
                      slug={post.slug}
                      imageUrl={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                      date={post.date}
                      authorName={post._embedded?.author?.[0]?.name || "Desconhecido"}
                      authorAvatar={post._embedded?.author?.[0]?.avatar_urls?.["96"]}
                    />
                  ))}
              </Grid>
            </>
          )}

          <PaginationDots>
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                className={
                  isMobile
                    ? index === mobilePage ? "active" : ""
                    : index === page ? "active" : ""
                }
              />
            ))}
          </PaginationDots>

        </>
      )}
    </Section>
  );
}
