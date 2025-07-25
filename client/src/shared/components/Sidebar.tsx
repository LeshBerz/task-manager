import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useBoardStore } from '@entities/board/store/BoardStore';

/**
 * Sidebar with board list and placeholders
 */
const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const boardStore = useBoardStore();

  return (
    <Menu
      mode="inline"
      theme="dark"
      items={[
        {
          key: 'boards',
          label: t('sidebar.boards'),
          children: boardStore.boards.map((board) => ({
            key: board.id,
            label: <Link to={`/board/${board.id}`}>{board.name}</Link>,
          })),
        },
        {
          key: 'mindmap',
          label: <Link to="/mindmap/1">{t('sidebar.mindmap')}</Link>,
        },
        {
          key: 'canvas',
          label: <Link to="/canvas/1">{t('sidebar.canvas')}</Link>,
        },
      ]}
    />
  );
};

export default Sidebar;