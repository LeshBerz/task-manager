import { Button, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@features/theme-switch/store/ThemeStore';
import { Link } from 'react-router-dom';

/**
 * Header component with theme and language switchers
 */
const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const themeStore = useThemeStore();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
      <div>
        <Button type="primary">
          <Link to="/task/new">{t('header.createTask')}</Link>
        </Button>
      </div>
      <div className="flex gap-4">
        <Select
          defaultValue={i18n.language}
          onChange={handleLanguageChange}
          options={[
            { value: 'en', label: 'English' },
            { value: 'ru', label: 'Русский' },
          ]}
        />
        <Button onClick={() => themeStore.toggleTheme()}>
          {themeStore.theme === 'dark' ? t('header.lightTheme') : t('header.darkTheme')}
        </Button>
      </div>
    </div>
  );
};

export default Header;