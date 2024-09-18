import { RedditComment, RedditCommentParsed, RedditPostData } from "@/app/api/types";

export async function fetchReddit(endpoint?: string): Promise<RedditPostData> {
  const data = await fetch(process.env.API_URL!);
  return await data.json();
}

export function parseComments(comments: RedditComment): RedditCommentParsed[] {
  return [];
}
