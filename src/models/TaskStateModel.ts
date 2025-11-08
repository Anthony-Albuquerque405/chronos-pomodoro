import type { TaskModel } from './TaskModels';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number; // segundos restantes na contagem regressiva
  formattedSecondsRaemining: string; // segundos restantes formatados como string MM:SS
  activeTask: TaskModel | null;
  currentCycle: number; // ciclo atual do pomodoro

  config: {
    workTime: number; // duração do tempo de trabalho em minutos
    shortBreakTime: number; // duração do intervalo curto em minutos
    longBreakTime: number; // duração do intervalo longo em minutos
  };
};
