export interface PostAuthor {
  name: string;
  avatar: string;
}

export interface Post {
  title: string;
  date: string;
  read: string;
  author: PostAuthor;
  image: string;
  content: string[] | string;
  images?: string[];
  links?: { label: string; href: string }[];
}