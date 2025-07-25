import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ConfigProvider } from 'antd';
import { I18nextProvider } from 'react-i18next';
import i18n from '@features/i18n/config/i18n';
import ThemeProvider from '@app/providers/ThemeProvider';
import Layout from '@shared/components/Layout';
import Main from '@pages/Main';
import Board from '@pages/Board';
import TaskCreate from '@pages/TaskCreate';
import TaskDetails from '@pages/TaskDetails';
import Mindmap from '@pages/Mindmap';
import Canvas from '@pages/Canvas';

/**
 * Main application component with routing
 */
const App = observer(() => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <ConfigProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <Main />
                  </Layout>
                }
              />
              <Route
                path="/board/:boardId"
                element={
                  <Layout>
                    <Board />
                  </Layout>
                }
              />
              <Route
                path="/task/new"
                element={
                  <Layout>
                    <TaskCreate />
                  </Layout>
                }
              />
              <Route
                path="/task/:id"
                element={
                  <Layout>
                    <TaskDetails />
                  </Layout>
                }
              />
              <Route
                path="/mindmap/:boardId"
                element={
                  <Layout>
                    <Mindmap />
                  </Layout>
                }
              />
              <Route
                path="/canvas/:boardId"
                element={
                  <Layout>
                    <Canvas />
                  </Layout>
                }
              />
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
});

export default App;