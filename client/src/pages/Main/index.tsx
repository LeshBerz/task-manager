import { Calendar } from 'react-big-calendar';
import { useTranslation } from 'react-i18next';
import { useTaskStore } from '@entities/task/store/TaskStore';
import { useNavigate } from 'react-router-dom';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

/**
 * Main page with calendar view
 */
const Main: React.FC = () => {
  const { t } = useTranslation();
  const taskStore = useTaskStore();
  const navigate = useNavigate();
  const localizer = momentLocalizer(moment);

  const events = taskStore.tasks.map((task) => ({
    id: task.id,
    title: task.title,
    start: new Date(task.date),
    end: new Date(task.date),
  }));

  const handleSelectEvent = (event: any) => {
    navigate(`/task/${event.id}`);
  };

  const handleSelectSlot = ({ start }: { start: Date }) => {
    navigate(`/task/new?date=${start.toISOString()}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        {t('main.title')}
      </h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        className="dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
};

export default Main;