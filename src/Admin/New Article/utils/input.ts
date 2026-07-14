export interface articleInput {
  elementId: string;
  fieldName: string;
  labelName: string;
}

export const inputFields: articleInput[] = [
  {
    elementId: "article-title",
    fieldName: "title",
    labelName: "Article Title",
  },
  {
    elementId: "article-subtitle",
    fieldName: "subtitle",
    labelName: "Article Subtitle",
  },
  { elementId: "article-slug", fieldName: "slug", labelName: "Article Slug (Auto generated based on title, Can be modified)" },
  {
    elementId: "article-category",
    fieldName: "category",
    labelName: "Article Category",
  },
  {
    elementId: "article-cover",
    fieldName: "cover",
    labelName: "Article Cover Image",
  },
  {
    elementId: "article-content",
    fieldName: "content",
    labelName: "Article Content",
  },
  {
    elementId: "article-excerpt",
    fieldName: "excerpt",
    labelName: "Article Excerpt (Auto generated based on article content, Can be modified)",
  },
  {
    elementId: "article-topics",
    fieldName: "topics",
    labelName: "Article Topics (Add topic tags which are related to the article)",
  },
  
  // Author fields
  {
    elementId: "author-name",
    fieldName: "author.name",
    labelName: "Author Name",
  },
];
