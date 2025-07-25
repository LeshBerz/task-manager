/**
 * Interface for Task entity
 */
export interface Task {
  id: string;
  title: string;
  description?: string;
  category: 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test';
  status: 'To Do' | 'In Progress' | 'Done';
  priority: 'Low' | 'Medium' | 'High';
  date: string;
  boardId: string;
  userId: string;
}