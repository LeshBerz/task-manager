import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useTaskStore } from '@entities/task/store/TaskStore';
import { useNavigate } from 'react-router-dom';
import { Select, Button, Space, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import './styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

/**
 * Main page with a calendar view of tasks, filters, and sorting
 */
const Main: React.FC = observer(() => {
  const { t } = useTranslation();
  const taskStore = useTaskStore();
  const navigate = useNavigate();
  const localizer = momentLocalizer(moment);

  // State for filters and sorting
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('date');

  // Filter and sort tasks
  const filteredTasks = taskStore.tasks
    .filter((task) => {
      if (statusFilter && task.status !== statusFilter) return false;
      if (categoryFilter && task.category !== categoryFilter) return false;
      if (priorityFilter && task.priority !== priorityFilter) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (sortBy === 'priority') {
        const priorityOrder = { High: 3, Medium: 2, Low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }
      return 0;
    });

  // Map tasks to calendar events
  const events = filteredTasks.map((task) => ({
    id: task.id,
    title: task.title,
    start: new Date(task.date),
    end: new Date(task.date),
    allDay: true,
  }));

  // Handle event click to navigate to task details
  const handleSelectEvent = (event: any) => {
    navigate(`/task/${event.id}`);
  };

  // Handle slot selection to create a new task
  const handleSelectSlot = ({ start }: { start: Date }) => {
    navigate(`/task/new?date=${start.toISOString()}`);
  };

  // Options for filters
  const statusOptions = [
    { value: 'To Do', label: t('task.status.toDo') },
    { value: 'In Progress', label: t('task.status.inProgress') },
    { value: 'Done', label: t('task.status.done') },
  ];

  const categoryOptions = [
    { value: 'Bug', label: t('task.category.bug') },
    { value: 'Feature', label: t('task.category.feature') },
    { value: 'Documentation', label: t('task.category.documentation') },
    { value: 'Refactor', label: t('task.category.refactor') },
    { value: 'Test', label: t('task.category.test') },
  ];

  const priorityOptions = [
    { value: 'Low', label: t('task.priority.low') },
    { value: 'Medium', label: t('task.priority.medium') },
    { value: 'High', label: t('task.priority.high') },
  ];

  const sortOptions = [
    { value: 'date', label: t('task.sort.date') },
    { value: 'priority', label: t('task.sort.priority') },
  ];

  return (
    <div className="main-container">
      <h1 className="main-title">{t('main.title')}</h1>
      {/* Filters and Sorting */}
      <div className="filter-container">
        <Space>
          <Select
            placeholder={t('task.filter.status')}
            options={statusOptions}
            onChange={setStatusFilter}
            allowClear
            className="w-40"
          />
          <Select
            placeholder={t('task.filter.category')}
            options={categoryOptions}
            onChange={setCategoryFilter}
            allowClear
            className="w-40"
          />
          <Select
            placeholder={t('task.filter.priority')}
            options={priorityOptions}
            onChange={setPriorityFilter}
            allowClear
            className="w-40"
          />
          <Select
            placeholder={t('task.sort.label')}
            options={sortOptions}
            onChange={setSortBy}
            defaultValue="date"
            className="w-40"
          />
          <Button
            type="primary"
            onClick={() => navigate('/task/new')}
            className="create-button"
          >
            {t('task.create')}
          </Button>
        </Space>
      </div>
      {/* Calendar */}
      <div className="calendar-container">
        {taskStore.isLoading ? (
          <div className="flex justify-center items-center h-[600px]">
            <Spin size="large" />
          </div>
        ) : (
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            selectable
            className="calendar"
            eventPropGetter={(event) => ({
              className: 'hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer',
            })}
          />
        )}
      </div>
    </div>
  );
});

export default Main;