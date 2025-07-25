import { useTranslation } from 'react-i18next';

/**
 * Placeholder for mindmap feature
 */
const Mindmap: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold dark:text-white">
        {t('mindmap.title')}
      </h1>
      <p className="dark:text-white">{t('mindmap.comingSoon')}</p>
    </div>
  );
};

export default Mindmap;