import { MoreVertical } from 'lucide-react';
import { Task } from '@/types';
import { usePomodoroStore } from '@/store/usePomodoroStore';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const { toggleTaskComplete, deleteTask } = usePomodoroStore();

  const handleToggle = () => {
    toggleTaskComplete(task.id);
  };

  return (
    <div className="task-item group">
      <button
        onClick={handleToggle}
        className={cn(
          "w-5 h-5 rounded-full border-2 flex-shrink-0 transition-all",
          task.completed
            ? "bg-status-success border-status-success"
            : "border-border-input hover:border-status-success"
        )}
      >
        {task.completed && (
          <svg
            className="w-full h-full text-text-on-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "text-base font-medium truncate",
            task.completed
              ? "text-text-muted line-through"
              : "text-text-primary"
          )}
        >
          {task.title}
        </p>
        <p className="text-sm text-text-muted">
          Pomodoros {task.pomos}
        </p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface-input"
            onClick={(e) => e.stopPropagation()}
          >
            <MoreVertical size={20} className="text-text-secondary" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => console.log('Edit', task.id)}>
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              deleteTask(task.id);
            }}
            className="text-status-error focus:text-status-error"
          >
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
