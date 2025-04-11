import { client } from "@/lib/sanity";

export async function getAllSanityPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    author,
    _createdAt
  }`;

  return await client.fetch(query);
}

export async function getSanityPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    author,
    body,
    _createdAt
  }`;

  return await client.fetch(query, { slug });
}
