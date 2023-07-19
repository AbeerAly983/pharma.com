export interface Livesession {
  id: number,
  url: string,
  title: string,
  description: string,
  date: string,
  time: string,
  disable: number,
  created_at: string,
  updated_at: string
}

export interface numberOfLivesession {
  total_sessions: number,
  session_today: number,
  session_month: number,
  session_year: number
}
