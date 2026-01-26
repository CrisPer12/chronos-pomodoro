import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { usePomodoroStore } from '../../store/usePomodoroStore';
import { TaskItem } from './TaskItem';
import { TaskModal } from './TaskModal';

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
        <h3 className="text-lg font-semibold text-neutral-800">
          Lista de Tarefas ({tasks.length} {tasks.length === 1 ? 'Tarefa' : 'Tarefas'})
        </h3>
        
        <div className="flex items-center gap-2">
          <button className="btn-icon">
            <Search size={20} className="text-neutral-600" />
          </button>
          <button className="btn-icon">
            <MoreVertical size={20} className="text-neutral-600" />
          </button>
        </div>
      </div>

      <div className="relative mb-4">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          placeholder="Buscar tarefas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-field pl-10"
        />
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar -mx-2 px-2">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12 text-neutral-500">
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
        className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-neutral-300 text-neutral-600 hover:border-primary-500 hover:text-primary-500 transition-all duration-200"
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

// Import MoreVertical
import { MoreVertical } from 'lucide-react';
