import { create } from 'zustand';
import type { Task, TimerMode, TimerConfig, TimerState } from '../types';

interface PomodoroStore {
  // Timer State
  timer: TimerState;
  config: TimerConfig;
  
  // Tasks
  tasks: Task[];
  
  // Actions
  setTimeLeft: (time: number) => void;
  setIsRunning: (running: boolean) => void;
  setMode: (mode: TimerMode) => void;
  setCurrentTask: (taskId: string | null) => void;
  updateConfig: (config: Partial<TimerConfig>) => void;
  resetConfig: () => void;
  
  // Task Actions
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleTaskComplete: (id: string) => void;
}

const DEFAULT_CONFIG: TimerConfig = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
};

const getInitialTime = (mode: TimerMode, config: TimerConfig): number => {
  switch (mode) {
    case 'pomodoro':
      return config.pomodoro * 60;
    case 'shortBreak':
      return config.shortBreak * 60;
    case 'longBreak':
      return config.longBreak * 60;
  }
};

export const usePomodoroStore = create<PomodoroStore>((set, get) => ({
  timer: {
    timeLeft: DEFAULT_CONFIG.pomodoro * 60,
    isRunning: false,
    mode: 'pomodoro',
    currentTaskId: null,
  },
  config: DEFAULT_CONFIG,
  tasks: [
    {
      id: '1',
      title: 'Meditação',
      pomos: 1,
      completed: true,
    },
    {
      id: '2',
      title: 'Ler um artigo sobre Tendências de Design',
      pomos: 1,
      completed: true,
    },
    {
      id: '3',
      title: 'Praticar Motion Design (After Effects)',
      pomos: 1/2,
      completed: false,
    },
    {
      id: '4',
      title: 'Assistir um filme',
      pomos: 0/2,
      completed: false,
    },
    {
      id: '5',
      title: 'Treino da Tarde',
      pomos: 0/2,
      completed: false,
    },
  ],

  setTimeLeft: (time) =>
    set((state) => ({
      timer: { ...state.timer, timeLeft: time },
    })),

  setIsRunning: (running) =>
    set((state) => ({
      timer: { ...state.timer, isRunning: running },
    })),

  setMode: (mode) =>
    set((state) => {
      const newTime = getInitialTime(mode, state.config);
      return {
        timer: {
          ...state.timer,
          mode,
          timeLeft: newTime,
          isRunning: false,
        },
      };
    }),

  setCurrentTask: (taskId) =>
    set((state) => ({
      timer: { ...state.timer, currentTaskId: taskId },
    })),

  updateConfig: (newConfig) =>
    set((state) => {
      const updatedConfig = { ...state.config, ...newConfig };
      const newTime = getInitialTime(state.timer.mode, updatedConfig);
      return {
        config: updatedConfig,
        timer: {
          ...state.timer,
          timeLeft: newTime,
          isRunning: false,
        },
      };
    }),

  resetConfig: () =>
    set((state) => {
      const newTime = getInitialTime(state.timer.mode, DEFAULT_CONFIG);
      return {
        config: DEFAULT_CONFIG,
        timer: {
          ...state.timer,
          timeLeft: newTime,
          isRunning: false,
        },
      };
    }),

  addTask: (task) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          ...task,
          id: Date.now().toString(),
        },
      ],
    })),

  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      ),
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  toggleTaskComplete: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
}));
