import { IsEnum } from 'class-validator';
import { TaskStatus } from './tasks.model';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus) //validate status is one of TaskStatus Enum property
  status: TaskStatus;
}
