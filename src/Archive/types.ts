export const ARTICLE_TAGS = [
  "Architecture",
  "TypeScript",
  "Systems",
  "Philosophy",
  "Craft",
  "DevOps",
  "Open Source",
  "Career",
  "Performance",
  "Security",
  "Testing",
  "API Design",
  "Database",
  "Frontend",
  "Backend",
  "AI & ML",
  "Tooling",
  "Algorithms",
  "Leadership",
];

export type ArticleTag = (typeof ARTICLE_TAGS)[number];

export const STATUS = [
  "draft" , "published" , "archived"
]

export type Status = (typeof STATUS)[number] ;

export type ArticleSize = "featured" | "large" | "medium" | "small";

export interface Article {
  id: string;
  slug: string;

  // Content
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  coverGradient?: string;

  // Taxonomy
  tag: ArticleTag;
  topics: string[];

  // Authorship
  author: Author;
  coAuthors?: Author[];

  // Timestamps
  publishedAt: string;       // ISO 8601
  updatedAt?: string;

  // Meta
  readTime: string;
  wordCount: number;
  featured: boolean;
  status: Status

  // Engagement
  views?: number;
  likes?: number;

  // SEO
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
    canonicalUrl?: string;
  };
}

export interface Author {
  id: string;
  name: string;
  initials: string;
  avatarUrl?: string;
  bio?: string;
  href?: string;
}

export interface FilterState {
  search: string;
  activeTag: ArticleTag | "All";
  sort: SortOption;
}

export type SortOption = "latest" | "oldest" | "popular";
