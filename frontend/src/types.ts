export interface Todo {
  id: number;
  title: string;
  completed: number; // 0 or 1
}

export interface Note {
  id: number;
  content: string;
  updated_at: string;
}
