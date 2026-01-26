import { Play, Pause, RotateCcw } from 'lucide-react';
import { usePomodoroStore } from '../../store/usePomodoroStore';

export const TimerControls = () => {
  const { timer, setIsRunning, setMode } = usePomodoroStore();

  const handlePlayPause = () => {
    setIsRunning(!timer.isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setMode(timer.mode); // Reseta para o tempo inicial do modo atual
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={handleReset}
        className="btn-icon text-neutral-600 hover:text-neutral-800"
        aria-label="Resetar timer"
      >
        <RotateCcw size={24} />
      </button>

      <button
        onClick={handlePlayPause}
        className="btn-primary px-8 py-4 text-lg flex items-center gap-3"
        aria-label={timer.isRunning ? 'Pausar timer' : 'Iniciar timer'}
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
      </button>

      <button
        className="btn-icon text-neutral-600 hover:text-neutral-800"
        aria-label="Pular"
      >
        <RotateCcw size={24} className="scale-x-[-1]" />
      </button>
    </div>
  );
};
