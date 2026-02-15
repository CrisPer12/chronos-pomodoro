import { usePomodoroStore } from '@/store/usePomodoroStore';
import { formatDate } from '@/utils/timeFormatter';

export const DailyProgress = () => {
  const { tasks } = usePomodoroStore();
  const now = new Date();

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-text-primary mb-4">
        Progresso Diário
      </h3>
      
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-action-primary/10 text-action-primary px-3 py-1.5 rounded-lg font-semibold text-sm">
          {completedTasks}/{totalTasks}
        </div>
        <span className="text-sm text-text-secondary">Tarefas concluídas</span>
        <span className="ml-auto text-sm text-text-muted">
          {formatDate(now)}
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="mt-2 text-right">
        <span className="text-xs text-text-muted">
          {Math.round(progressPercentage)}%
        </span>
      </div>
    </div>
  );
};
