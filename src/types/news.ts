// News item type used in the app
export type NewsItem = {
  title: string;
  url: string;
  publishedAt: string;
  source: string;
  // Optional image URL (NewsAPI: urlToImage, GNews: image)
  image?: string;
  // Optional description (NewsAPI: description)
  description?: string;
};

// NewsAPI.org response types
export type NewsAPIResponse = {
  articles?: {
    title: string;
    url: string;
    publishedAt: string;
    urlToImage?: string;
    description?: string;
    source?: { name?: string };
  }[];
};

// GNews response types
export type GNewsResponse = {
  articles?: {
    title: string;
    url: string;
    publishedAt: string;
    image?: string;
    source?: { name?: string };
  }[];
};

// The Guardian response types
export type GuardianResponse = {
  response?: {
    results?: {
      webTitle: string;
      webUrl: string;
      webPublicationDate: string;
    }[];
  };
};

export type NewsAPIArticle = {
  title: string;
  url: string;
  publishedAt: string;
  urlToImage?: string;
  description?: string;
  source?: { name?: string };
};
