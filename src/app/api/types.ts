export interface RedditPost {
  subreddit: string;
  title: string;
  score: number;
  upvote_ratio: number;
  id: string;
}

export interface RedditPostChildren {
  kind: string;
  data: RedditPost;
}

export interface RedditPostData {
  kind: string;
  data: {
    children: RedditPostChildren[];
  };
}

export interface RedditComment {
  kind: string;
  data: {
    name: string;
    parent_id: string;
    author: string;
    body: string;
    score: number;
    depth: number;
    replies?: {
      data: {
        children: RedditComment[];
      };
    };
  };
}

export interface RedditCommentData {
  kind: string;
  data: {
    children: RedditComment[];
  };
}

export interface RedditCommentParsed {
  id: string;
  parentId: string;
  author: string;
  text: string;
  score: number;
  depth: number;
}

export interface RedditPostDetails {
  postDetails: {
    subredditName: string;
    title: string;
    score: number;
    upvoteRatio: number;
  };
  comments: RedditCommentParsed[];
}
