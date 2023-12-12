import { FormControl } from '@angular/forms';

export interface CreateTaskForm {
  title: FormControl<string>;
  description: FormControl<string>;
  completed: FormControl<boolean>;
  startTime: FormControl<Date>;
  endTime: FormControl<Date>;
}
