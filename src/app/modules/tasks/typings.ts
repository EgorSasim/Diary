export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  startTime: Date;
  endTime: Date;
  listId: number;
}
