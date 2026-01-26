import { Check, Circle, MoreVertical } from 'lucide-react';
import { usePomodoroStore } from '../../store/usePomodoroStore';
import type { Task } from '../../types';
import clsx from 'clsx';
import { Dropdown } from 'rsuite';

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const { toggleTaskComplete, deleteTask, setCurrentTask } = usePomodoroStore();

  const handleToggle = () => {
    toggleTaskComplete(task.id);
  };

  const handleSelect = () => {
    setCurrentTask(task.id);
  };

  return (
    <div
      className={clsx(
        'group flex items-center gap-3 p-3 rounded-xl transition-all duration-200',
        'hover:bg-neutral-50 cursor-pointer',
        task.completed && 'opacity-60'
      )}
      onClick={handleSelect}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleToggle();
        }}
        className="flex-shrink-0"
      >
        {task.completed ? (
          <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
            <Check size={16} className="text-white" />
          </div>
        ) : (
          <Circle size={24} className="text-neutral-300 hover:text-primary-500" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p
          className={clsx(
            'font-medium text-neutral-800 truncate',
            task.completed && 'line-through text-neutral-500'
          )}
        >
          {task.title}
        </p>
        <p className="text-sm text-neutral-500">
          Pomodoros {task.pomos}
        </p>
      </div>

      <Dropdown
        placement="bottomEnd"
        renderToggle={(props, ref) => (
          <button
            {...props}
            ref={ref}
            className="btn-icon opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            <MoreVertical size={20} className="text-neutral-600" />
          </button>
        )}
      >
        <Dropdown.Item onClick={() => console.log('Edit', task.id)}>
          Editar
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
        >
          Excluir
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};
