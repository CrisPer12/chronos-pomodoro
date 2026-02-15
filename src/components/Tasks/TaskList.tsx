import { useState } from 'react';
import { Search, MoreVertical, Plus } from 'lucide-react';
import { usePomodoroStore } from '@/store/usePomodoroStore';
import { TaskItem } from './TaskItem';
import { TaskModal } from './TaskModal';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const TaskList = () => {
  const { tasks } = usePomodoroStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="card h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">
          Lista de Tarefas ({tasks.length} {tasks.length === 1 ? 'Tarefa' : 'Tarefas'})
        </h3>
        
        <div className="flex items-center gap-2">
          <Button variant="icon" size="icon">
            <Search size={20} className="text-text-secondary" />
          </Button>
          <Button variant="icon" size="icon">
            <MoreVertical size={20} className="text-text-secondary" />
          </Button>
        </div>
      </div>

      <div className="relative mb-4">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
        <Input
          type="text"
          placeholder="Buscar tarefas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar -mx-2 px-2">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12 text-text-muted">
            <p>Nenhuma tarefa encontrada</p>
          </div>
        ) : (
          <div className="space-y-1">
            {filteredTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-border-default text-text-secondary hover:border-action-primary hover:text-action-primary transition-all duration-base"
      >
        <Plus size={20} />
        <span className="font-medium">Adicionar tarefa</span>
      </button>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
