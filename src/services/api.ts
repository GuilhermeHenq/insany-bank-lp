export async function getAllPosts() {
  const res = await fetch("https://devblog.insanydesign.com/wp-json/wp/v2/posts");
  return await res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`https://devblog.insanydesign.com/wp-json/wp/v2/posts?slug=${slug}`);
  const data = await res.json();
  return data[0];
}
