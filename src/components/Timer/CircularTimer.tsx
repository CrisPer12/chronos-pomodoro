import { usePomodoroStore } from '@/store/usePomodoroStore';
import { formatTime } from '@/utils/timeFormatter';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const CircularTimer = () => {
  const { timer, config } = usePomodoroStore();

  const getTotalTime = () => {
    switch (timer.mode) {
      case 'pomodoro':
        return config.pomodoro * 60;
      case 'shortBreak':
        return config.shortBreak * 60;
      case 'longBreak':
        return config.longBreak * 60;
      default:
        return config.pomodoro * 60;
    }
  };

  const totalTime = getTotalTime();
  const percentage = (timer.timeLeft / totalTime) * 100;

  return (
    <div className="w-60 h-60">
      <CircularProgressbar
        value={percentage}
        text={formatTime(timer.timeLeft)}
        styles={buildStyles({
          textSize: '20px',
          pathColor: 'var(--action-primary)',
          textColor: 'var(--text-primary)',
          trailColor: 'var(--border-subtle)',
          pathTransitionDuration: 0.5,
        })}
      />
    </div>
  );
};
