export interface LiveSession {
  id: number,
  url: string,
  title: string,
  description: string,
  date: string,
  time: string,
  created_at: string,
  updated_at: string
  disable:number
}
export interface LiveSessionComment {
  id:number,
  name: string,
  photo: string,
  comment: string
}
