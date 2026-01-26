import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { usePomodoroStore } from '../../store/usePomodoroStore';
import { formatTime, getProgressPercentage } from '../../utils/timeFormatter';

export const CircularTimer = () => {
  const { timer, config, tasks } = usePomodoroStore();
  
  const totalTime = (() => {
    switch (timer.mode) {
      case 'pomodoro':
        return config.pomodoro * 60;
      case 'shortBreak':
        return config.shortBreak * 60;
      case 'longBreak':
        return config.longBreak * 60;
    }
  })();

  const percentage = getProgressPercentage(timer.timeLeft, totalTime);
  const currentTask = tasks.find(t => t.id === timer.currentTaskId);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full max-w-[320px] md:max-w-[400px] aspect-square">
        <CircularProgressbar
          value={percentage}
          text={formatTime(timer.timeLeft)}
          styles={buildStyles({
            pathColor: '#4A90E2',
            textColor: '#1F2937',
            trailColor: '#E5E7EB',
            pathTransitionDuration: 0.5,
            textSize: '20px',
          })}
          strokeWidth={6}
        />
      </div>
      
      {currentTask && (
        <div className="text-center animate-fade-in">
          <p className="text-sm text-neutral-500 mb-1">
            #{tasks.findIndex(t => t.id === currentTask.id) + 1}
          </p>
          <p className="text-lg font-medium text-neutral-800">
            {currentTask.title}
          </p>
        </div>
      )}
    </div>
  );
};
