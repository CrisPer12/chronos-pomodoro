import { useState } from 'react';
import { usePomodoroStore } from '../../store/usePomodoroStore';

export const CustomTimerConfig = () => {
  const { config, updateConfig, resetConfig } = usePomodoroStore();
  
  const [localConfig, setLocalConfig] = useState(config);

  const handleUpdate = () => {
    updateConfig(localConfig);
  };

  const handleReset = () => {
    resetConfig();
    setLocalConfig({ pomodoro: 25, shortBreak: 5, longBreak: 15 });
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-neutral-800 mb-4">
        Timer Personalizado (Minutos)
      </h3>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-neutral-600 mb-2">
            Pomodoro
          </label>
          <input
            type="number"
            min="1"
            max="60"
            value={localConfig.pomodoro}
            onChange={(e) =>
              setLocalConfig({ ...localConfig, pomodoro: Number(e.target.value) })
            }
            className="input-field text-center"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-600 mb-2">
            Pausa Curta
          </label>
          <input
            type="number"
            min="1"
            max="30"
            value={localConfig.shortBreak}
            onChange={(e) =>
              setLocalConfig({ ...localConfig, shortBreak: Number(e.target.value) })
            }
            className="input-field text-center"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-600 mb-2">
            Pausa Longa
          </label>
          <input
            type="number"
            min="1"
            max="60"
            value={localConfig.longBreak}
            onChange={(e) =>
              setLocalConfig({ ...localConfig, longBreak: Number(e.target.value) })
            }
            className="input-field text-center"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={handleReset} className="btn-secondary flex-1">
          Resetar
        </button>
        <button onClick={handleUpdate} className="btn-primary flex-1">
          Atualizar
        </button>
      </div>
    </div>
  );
};
