import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  durationInMinutes: number; // duration in minutes
  startDate: number;
  completedDate: number | null; // quando o time chega ao final
  interruptedDate: number | null; // quando o time é interrompido
  type: keyof TaskStateModel['config']; // 'workTime' | 'shortBreakTime' | 'longBreakTime'
};
