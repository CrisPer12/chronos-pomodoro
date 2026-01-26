import { useState } from 'react';
import { Modal, Button, Input, InputNumber } from 'rsuite';
import { usePomodoroStore } from '../../store/usePomodoroStore';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskId?: string;
}

export const TaskModal = ({ isOpen, onClose, taskId }: TaskModalProps) => {
  const { addTask, updateTask, tasks } = usePomodoroStore();
  const existingTask = taskId ? tasks.find(t => t.id === taskId) : null;

  const [title, setTitle] = useState(existingTask?.title || '');
  const [pomos, setPomos] = useState(existingTask?.pomos || 1);

  const handleSubmit = () => {
    if (!title.trim()) return;

    if (taskId) {
      updateTask(taskId, { title, pomos });
    } else {
      addTask({ title, pomos, completed: false });
    }

    setTitle('');
    setPomos(1);
    onClose();
  };

  const handleClose = () => {
    setTitle('');
    setPomos(1);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose} size="sm">
      <Modal.Header>
        <Modal.Title className="text-xl font-semibold">
          {taskId ? 'Editar Tarefa' : 'Adicionar Nova Tarefa'}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Título da Tarefa
            </label>
            <Input
              placeholder="Digite o título da tarefa..."
              value={title}
              onChange={setTitle}
              size="lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Número de Pomodoros
            </label>
            <InputNumber
              min={1}
              max={10}
              value={pomos}
              onChange={(value) => setPomos(Number(value) || 1)}
              size="lg"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} appearance="subtle">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} appearance="primary" disabled={!title.trim()}>
          {taskId ? 'Atualizar' : 'Adicionar'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
