import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useTranslation } from 'react-i18next';
import { useTaskStore } from '@entities/task/store/TaskStore';
import { useParams } from 'react-router-dom';
import { Card, Tag } from 'antd';
import { useEffect } from 'react';

/**
 * Sortable Task Item component
 */
interface SortableTaskItemProps {
  task: {
    id: string;
    title: string;
    description?: string;
    category: string;
    status: string;
    priority: string;
  };
}

const SortableTaskItem: React.FC<SortableTaskItemProps> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card title={task.title} className="mb-2">
        <p>{task.description}</p>
        <Tag color="blue">{task.category}</Tag>
        <Tag color="green">{task.priority}</Tag>
      </Card>
    </div>
  );
};

/**
 * Kanban board for tasks
 */
const Board: React.FC = () => {
  const { t } = useTranslation();
  const taskStore = useTaskStore();
  const { boardId } = useParams();

  useEffect(() => {
    if (boardId) {
      taskStore.fetchTasks(boardId);
    }
  }, [boardId]);

  const onDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;
    taskStore.moveTask(active.id, over.id);
  };

  const statuses = ['To Do', 'In Progress', 'Done'];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        {t('board.title')}
      </h1>
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <div className="grid grid-cols-3 gap-4">
          {statuses.map((status) => (
            <SortableContext
              key={status}
              id={status}
              items={taskStore.tasks.filter((task) => task.status === status).map((task) => task.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
                <h2 className="text-lg font-semibold dark:text-white">
                  {t(`board.status.${status.toLowerCase().replace(' ', '')}`)}
                </h2>
                {taskStore.tasks
                  .filter((task) => task.status === status)
                  .map((task) => (
                    <SortableTaskItem key={task.id} task={task} />
                  ))}
              </div>
            </SortableContext>
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default Board;