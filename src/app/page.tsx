export const revalidate = 3600;

function DefaultPost({post}:{post: any}) {
  if(post) console.info(post);
  return <div>Loading...</div>;
}

export default async function Home() {
  const data = await fetch(process.env.API_URL!);
  const posts = await data.json();

  return <DefaultPost post={posts} />;
}
