type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  content: object;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
