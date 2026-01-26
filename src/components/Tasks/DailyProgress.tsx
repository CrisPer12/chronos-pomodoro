import { usePomodoroStore } from '../../store/usePomodoroStore';
import { calculateProgress, formatDate } from '../../utils/timeFormatter';

export const DailyProgress = () => {
  const { tasks } = usePomodoroStore();
  
  const completedTasks = tasks.filter(t => t.completed).length;
  const totalTasks = tasks.length;
  const percentage = calculateProgress(completedTasks, totalTasks);
  const now = new Date();

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-neutral-800 mb-4">
        Progresso Diário
      </h3>
      
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-primary-100 text-primary-600 px-3 py-1.5 rounded-lg font-semibold text-sm">
          {completedTasks}/{totalTasks}
        </div>
        <span className="text-sm text-neutral-600">Tarefas concluídas</span>
        <span className="ml-auto text-sm text-neutral-500">
          {formatDate(now)}
        </span>
      </div>

      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="text-right mt-2">
        <span className="text-2xl font-bold text-neutral-800">{percentage}%</span>
      </div>
    </div>
  );
};
