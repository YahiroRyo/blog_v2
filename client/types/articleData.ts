type ArticleData = {
    id: string,
    title: string,
    description: string,
    created_at: string,
}
export type FetchArticles = {
  current_page: number,
  first_page_url: string,
  from: number,
  last_page: number,
  last_page_url: string,
  links: string[],
  next_page_url: string,
  path: string,
  per_page: number,
  prev_page_url: string,
  to: number,
  total: number,
  data: ArticleData[]
};

export default ArticleData;