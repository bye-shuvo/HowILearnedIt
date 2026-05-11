export type ArticleTag =
  | "Architecture"
  | "TypeScript"
  | "Systems"
  | "Philosophy"
  | "Craft"
  | "DevOps"
  | "Open Source"
  | "Career";

export type ArticleSize = "featured" | "large" | "medium" | "small";

export interface Article {
  id: number;
  slug: string;
  tag: ArticleTag;
  title: string;
  subtitle: string;
  excerpt: string;
  author: Author;
  date: string;
  readTime: string;
  size: ArticleSize;
  coverGradient: string; // Tailwind gradient classes for placeholder cover
}

export interface Author {
  name: string;
  initials: string;
}

export interface FilterState {
  search: string;
  activeTag: ArticleTag | "All";
  sort: SortOption;
}

export type SortOption = "latest" | "oldest" | "popular";
