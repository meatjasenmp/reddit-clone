import { RedditPostData } from "@/app/api/types";

export async function fetchReddit(endpoint?: string): Promise<RedditPostData> {
  const url = process.env.API_URL! + (endpoint || "");
  const data = await fetch(url);
  return await data.json();
}
