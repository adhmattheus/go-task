import { ITaskFormControls } from './task-form-controls.interface';

export enum TaskFormMode {
  CREATE = 'create',
  EDIT = 'edit',
}

export interface ITaskFormModalData {
  mode: TaskFormMode;
  formValues: ITaskFormControls;
}
