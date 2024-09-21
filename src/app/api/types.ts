export interface MediaMetadata {
  [id: string]: {
    status: string;
    e: string;
    m: string;
    p: [
      {
        y: number;
        x: number;
        u: string;
      },
    ];
    s: {
      y: number;
      x: number;
      u: string;
    };
    id: string;
  };
}

export interface GalleryData {
  [items: string]: [
    {
      caption: string;
      media_id: string;
      id: string;
    },
  ];
}

export interface RedditImage {
  images: [
    {
      source: {
        url: string;
        width: number;
        height: number;
      };
      resolutions: [
        {
          url: string;
          width: number;
          height: number;
        },
      ];
      id: string;
    },
  ];
}

export interface RedditPreview {
  preview: {
    images: RedditImage[];
  };
}

export interface RedditPost {
  subreddit: string;
  title: string;
  score: number;
  ups: number;
  created: number;
  created_utc: number;
  author: string;
  permalink: string;
  thumbnail: string;
  subreddit_name_prefixed: string;
  downs: number;
  id: string;
  preview: RedditPreview;
  is_video: boolean;
  is_gallery: boolean;
  media_metadata: MediaMetadata;
  gallery_data: GalleryData;
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
