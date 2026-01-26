export type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

export interface Task {
  id: string;
  title: string;
  pomos: number;
  completed: boolean;
}

export interface TimerConfig {
  pomodoro: number; // em minutos
  shortBreak: number;
  longBreak: number;
}

export interface DailyProgress {
  completedTasks: number;
  totalTasks: number;
  date: string;
}

export interface TimerState {
  timeLeft: number; // em segundos
  isRunning: boolean;
  mode: TimerMode;
  currentTaskId: string | null;
}
