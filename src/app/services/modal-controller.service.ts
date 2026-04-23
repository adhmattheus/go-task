import { Dialog } from '@angular/cdk/dialog';
import { inject, Injectable } from '@angular/core';
import { TaskCommentsModal } from '../components/task-comments-modal/task-comments-modal';
import { TaskFormModal } from '../components/task-form-modal/task-form-modal';

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
    return this._dialog.open(TaskFormModal, {
      ...this.modalSizeOptions,
      data: {
        mode: 'create',
      },
    });
  }

  openEditTaskModal(taskId: string) {
    return this._dialog.open(TaskFormModal, {
      data: { taskId, mode: 'edit' },
      ...this.modalSizeOptions,
    });
  }

  openTaskCommentsModal(taskId: string) {
    return this._dialog.open(TaskCommentsModal, {
      data: { taskId },
      ...this.modalSizeOptions,
    });
  }
}
