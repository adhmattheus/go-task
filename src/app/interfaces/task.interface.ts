import { TaskStatusEnum } from '../enums/task-status.enum';
import { IComment } from './comment.interface';

export interface ITask {
  id: string;
  name: string;
  description: string;
  comments: IComment[];
  status: TaskStatusEnum;
}
