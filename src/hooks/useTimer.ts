import { useEffect, useRef } from 'react';
import { usePomodoroStore } from '../store/usePomodoroStore';

export const useTimer = () => {
  const { timer, setTimeLeft, setIsRunning, setMode } = usePomodoroStore();
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (timer.isRunning && timer.timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft(timer.timeLeft - 1);
      }, 1000);
    } else if (timer.timeLeft === 0 && timer.isRunning) {
      // Timer completado
      setIsRunning(false);
      
      // Auto-switch para próximo modo
      if (timer.mode === 'pomodoro') {
        setMode('shortBreak');
      } else {
        setMode('pomodoro');
      }

      // Notificação (pode adicionar som aqui)
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Chronos Pomodoro', {
          body: timer.mode === 'pomodoro' 
            ? 'Hora de fazer uma pausa!' 
            : 'Hora de focar!',
          icon: '/vite.svg',
        });
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [timer.isRunning, timer.timeLeft, timer.mode, setTimeLeft, setIsRunning, setMode]);

  // Request notification permission on mount
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  return timer;
};
