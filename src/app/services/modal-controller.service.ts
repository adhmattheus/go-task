import { Dialog } from '@angular/cdk/dialog';
import { inject, Injectable } from '@angular/core';
import { TaskCommentsModal } from '../components/task-comments-modal/task-comments-modal';
import { TaskFormModal } from '../components/task-form-modal/task-form-modal';
import { ITaskFormControls } from '../interfaces/task-form-controls.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalControllerService {
  private readonly _dialog = inject(Dialog);
  private readonly modalSizeOptions = {
    maxWidth: '620px',
    width: '95%',
  };

  openNewTaskModal() {
    return this._dialog.open<ITaskFormControls>(TaskFormModal, {
      ...this.modalSizeOptions,
      disableClose: true,
      data: {
        mode: 'create',
        formValues: {
          name: '',
          description: '',
        },
      },
    });
  }

  openEditTaskModal(formValues: ITaskFormControls) {
    return this._dialog.open<ITaskFormControls>(TaskFormModal, {
      ...this.modalSizeOptions,
      disableClose: true,
      data: {
        mode: 'edit',
        formValues,
      },
    });
  }

  openTaskCommentsModal(taskId: string) {
    return this._dialog.open(TaskCommentsModal, {
      ...this.modalSizeOptions,
      data: { taskId },
    });
  }
}
