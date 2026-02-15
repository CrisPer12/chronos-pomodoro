import { Play, Pause, RotateCcw } from 'lucide-react';
import { usePomodoroStore } from '@/store/usePomodoroStore';
import { Button } from '@/components/ui/button';

export const TimerControls = () => {
  const { timer, setIsRunning, resetTimer } = usePomodoroStore();

  const handlePlayPause = () => {
    setIsRunning(!timer.isRunning);
  };

  const handleReset = () => {
    resetTimer();
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        variant="icon"
        size="icon"
        onClick={handleReset}
        aria-label="Resetar timer"
        className="text-text-secondary hover:text-text-primary"
      >
        <RotateCcw size={24} />
      </Button>

      <Button
        variant="primary"
        size="lg"
        onClick={handlePlayPause}
        aria-label={timer.isRunning ? 'Pausar timer' : 'Iniciar timer'}
        className="gap-3"
      >
        {timer.isRunning ? (
          <>
            <Pause size={24} fill="currentColor" />
            <span>Pausar</span>
          </>
        ) : (
          <>
            <Play size={24} fill="currentColor" />
            <span>Iniciar</span>
          </>
        )}
      </Button>

      <Button
        variant="icon"
        size="icon"
        aria-label="Pular"
        className="text-text-secondary hover:text-text-primary"
      >
        <RotateCcw size={24} className="scale-x-[-1]" />
      </Button>
    </div>
  );
};
