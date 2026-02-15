import { useState, useEffect } from 'react';
import { usePomodoroStore } from '@/store/usePomodoroStore';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskId?: string;
}

export const TaskModal = ({ isOpen, onClose, taskId }: TaskModalProps) => {
  const { tasks, addTask, updateTask } = usePomodoroStore();
  const [title, setTitle] = useState('');
  const [pomos, setPomos] = useState(1);

  useEffect(() => {
    if (taskId) {
      const task = tasks.find((t) => t.id === taskId);
      if (task) {
        setTitle(task.title);
        setPomos(task.pomos);
      }
    } else {
      setTitle('');
      setPomos(1);
    }
  }, [taskId, tasks, isOpen]);

  const handleSubmit = () => {
    if (!title.trim()) return;

    if (taskId) {
      updateTask(taskId, { title, pomos });
    } else {
      addTask({ title, pomos });
    }

    handleClose();
  };

  const handleClose = () => {
    setTitle('');
    setPomos(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {taskId ? 'Editar Tarefa' : 'Adicionar Nova Tarefa'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Título da Tarefa
            </label>
            <Input
              placeholder="Digite o título da tarefa..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Número de Pomodoros
            </label>
            <Input
              type="number"
              min="1"
              max="10"
              value={pomos}
              onChange={(e) => setPomos(Number(e.target.value) || 1)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleClose} variant="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} variant="primary" disabled={!title.trim()}>
            {taskId ? 'Atualizar' : 'Adicionar'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
