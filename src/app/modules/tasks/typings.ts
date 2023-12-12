import { FormControl } from '@angular/forms';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  startTime: Date;
  endTime: Date;
  listId: number;
}

export interface TaskForm {
  id: FormControl<number>;
  title: FormControl<string>;
  description: FormControl<string>;
  completed: FormControl<boolean>;
  startTime: FormControl<Date>;
  endTime: FormControl<Date>;
  listId: FormControl<number>;
}
