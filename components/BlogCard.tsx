import Link from "next/link";
import styled from "styled-components";

type BlogCardProps = {
  id: number;
  title: string;
  slug: string;
  imageUrl?: string;
  date: string;
  authorName: string;
  authorAvatar?: string;
};


const Card = styled.div`
  background: white;
  width: 280px;
  height: 520px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 280px;
    height: 340px;
    object-fit: cover;
  }


  .content {
    padding: 1rem;

    .meta {
      font-size: 0.75rem;
      margin-bottom: 0.5rem;
      color: #4a4a4a;

      strong {
        color: #1d63ff;
        margin-right: 6px;
      }
    }

    h3 {
      font-size: 1rem;
      margin-bottom: 0.75rem;
      line-height: 1.3;
      color: #0d081a;
      font-weight: 600;
    }

    .author {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1rem;

      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
      }

      .info {
        font-size: 0.85rem;
        color: #0d081a;
        line-height: 1.2;

        span {
          font-weight: bold;
          display: block;
        }

        small {
          color: #666;
        }
      }
    }
  }
`;

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { month: "long", year: "numeric" };
  return new Date(dateString).toLocaleDateString("pt-BR", options);
}


const BlogCard = ({ title, slug, imageUrl, date, authorName, authorAvatar }: BlogCardProps) => {
  const finalImage = imageUrl || "/images/avatar-1.png";
  const finalAvatar = authorAvatar || "/images/avatar-2.png";

  return (
    <Link href={`/posts/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
      <Card>
        <img src={finalImage} alt={title} />
        <div className="content">
          <div className="meta">
            <strong>Business</strong> {formatDate(date)}
          </div>
          <h3 dangerouslySetInnerHTML={{ __html: title }} />
          <div className="author">
            <img src={finalAvatar} alt={authorName} />
            <div className="info">
              <span>{authorName}</span>
              <small>Autor</small>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};


export default BlogCard;
