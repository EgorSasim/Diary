import { FormControl } from '@angular/forms';

export interface createTaskForm {
  title: FormControl<string>;
  description: FormControl<string>;
  completed: FormControl<boolean>;
  startTime: FormControl<Date>;
  endTime: FormControl<Date>;
}
