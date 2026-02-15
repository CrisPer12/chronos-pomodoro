import { usePomodoroStore } from '@/store/usePomodoroStore';
import { TimerMode } from '@/types';
import { cn } from '@/lib/utils';

const MODES: { value: TimerMode; label: string }[] = [
  { value: 'pomodoro', label: 'Pomodoro' },
  { value: 'shortBreak', label: 'Pausa Curta' },
  { value: 'longBreak', label: 'Pausa Longa' },
];

export const ModeSelector = () => {
  const { timer, setMode } = usePomodoroStore();

  return (
    <div className="flex gap-2">
      {MODES.map((mode) => (
        <button
          key={mode.value}
          onClick={() => setMode(mode.value)}
          className={cn(
            "px-5 py-3 rounded-md font-medium text-base transition-all duration-base",
            timer.mode === mode.value
              ? "bg-action-primary text-text-on-primary"
              : "text-text-secondary hover:bg-surface-input"
          )}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
};
