import { Layout as AntdLayout, Button } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuOutlined } from '@ant-design/icons';
import Sidebar from '@shared/components/Sidebar';
import Header from '@shared/components/Header';

/**
 * Main layout component with sidebar and header
 */
const { Content, Sider } = AntdLayout;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <AntdLayout className="min-h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        trigger={
          <Button
            type="primary"
            icon={<MenuOutlined />}
            className="fixed top-4 left-4 z-10"
          >
            {collapsed ? t('layout.openSidebar') : t('layout.closeSidebar')}
          </Button>
        }
        className="dark:bg-gray-800"
      >
        <Sidebar />
      </Sider>
      <AntdLayout>
        <Header />
        <Content className="p-4 dark:bg-gray-900">{children}</Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;