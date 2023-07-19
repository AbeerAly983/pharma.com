export interface numberOfNews {
  total_news: number,
  new_today: number,
  new_month: number,
  new_year: number
}

export interface news{
  id: number,
  title: string,
  photo:string,
  description:string,
  created_at: string,
  updated_at: string
}
