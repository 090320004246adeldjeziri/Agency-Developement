export interface BlogModel {
    id: number;
    title: string;
    author: string;
    shortDescription: string;
    content: {
      subtitle: string;
      paragraph: string;
    }[];
  }