import { useTranslation } from 'react-i18next';

/**
 * Placeholder for canvas feature
 */
const Canvas: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold dark:text-white">
        {t('canvas.title')}
      </h1>
      <p className="dark:text-white">{t('canvas.comingSoon')}</p>
    </div>
  );
};

export default Canvas;