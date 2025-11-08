import type { TaskModel } from './TaskModels';

export type TaskStateModel = {
  tasks: TaskModel[]; // historico, MainForm
  secondsRemaining: number; // Countdown, Historico, MainForm, Button
  formattedSecondsRaemining: string; // Countdown, Titulo da aplicação
  activeTask: TaskModel | null; // Countdown, Historico, MainForm, Button
  currentCycle: number; // Home

  config: {
    workTime: number; // duração do tempo de trabalho em minutos
    shortBreakTime: number; // duração do intervalo curto em minutos
    longBreakTime: number; // duração do intervalo longo em minutos
  };
};
