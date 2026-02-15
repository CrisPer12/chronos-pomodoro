import { useState } from 'react';
import { usePomodoroStore } from '@/store/usePomodoroStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const DEFAULT_CONFIG = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
};

export const CustomTimerConfig = () => {
  const { config, updateConfig } = usePomodoroStore();
  const [localConfig, setLocalConfig] = useState(config);

  const handleUpdate = () => {
    updateConfig(localConfig);
  };

  const handleReset = () => {
    setLocalConfig(DEFAULT_CONFIG);
    updateConfig(DEFAULT_CONFIG);
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-text-primary mb-4">
        Timer Personalizado (Minutos)
      </h3>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Pomodoro
          </label>
          <Input
            type="number"
            min="1"
            max="60"
            value={localConfig.pomodoro}
            onChange={(e) =>
              setLocalConfig({ ...localConfig, pomodoro: Number(e.target.value) })
            }
            className="text-center"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Pausa Curta
          </label>
          <Input
            type="number"
            min="1"
            max="30"
            value={localConfig.shortBreak}
            onChange={(e) =>
              setLocalConfig({ ...localConfig, shortBreak: Number(e.target.value) })
            }
            className="text-center"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Pausa Longa
          </label>
          <Input
            type="number"
            min="1"
            max="60"
            value={localConfig.longBreak}
            onChange={(e) =>
              setLocalConfig({ ...localConfig, longBreak: Number(e.target.value) })
            }
            className="text-center"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <Button onClick={handleReset} variant="secondary" className="flex-1">
          Resetar
        </Button>
        <Button onClick={handleUpdate} variant="primary" className="flex-1">
          Atualizar
        </Button>
      </div>
    </div>
  );
};
