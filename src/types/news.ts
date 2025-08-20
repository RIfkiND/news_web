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
  // Optional category for news categorization
  category?: string;
  // Optional author information
  author?: string;
};

// NewsAPI.org response types
export type NewsAPIResponse = {
  articles?: {
    title: string;
    url: string;
    publishedAt: string;
    urlToImage?: string;
    description?: string;
    content?: string;
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
    content?: string;
    source?: { name?: string };
    description?: string;
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
  content?: string;
  source?: { name?: string };
};


export type MediastackArticle = {
  title: string;
  url: string;
  published_at: string;
  source?: string;
  image?: string;
  description?: string;
};

export type MediastackResponse = {
  data: MediastackArticle[];
  // ...other fields if needed
};

//  <h2
//         className="text-7xl font-extrabold my-25 relative inline-block"
        
//       >
//         Top Headlines
//         <span
//           className="block absolute left-0 mx-auto"
//           style={{
//             height: "25px", // more height
//             background: "#bae6fd",
//             borderRadius: "0px",
//             bottom: "2px",
//             width: "100%", // exactly as wide as the text
//             zIndex: -1,
//           }}
//         />
//       </h2>