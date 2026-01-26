import { usePomodoroStore } from '../../store/usePomodoroStore';
import type { TimerMode } from '../../types';
import clsx from 'clsx';

const MODES: { value: TimerMode; label: string }[] = [
  { value: 'pomodoro', label: 'Pomodoro' },
  { value: 'shortBreak', label: 'Pausa Curta' },
  { value: 'longBreak', label: 'Pausa Longa' },
];

export const ModeSelector = () => {
  const { timer, setMode } = usePomodoroStore();

  return (
    <div className="flex gap-2 p-1 bg-neutral-100 rounded-xl">
      {MODES.map((mode) => (
        <button
          key={mode.value}
          onClick={() => setMode(mode.value)}
          className={clsx(
            'px-6 py-2.5 rounded-lg font-medium transition-all duration-200',
            'text-sm md:text-base',
            timer.mode === mode.value
              ? 'bg-primary-500 text-white shadow-soft'
              : 'text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50'
          )}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
};
