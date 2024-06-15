import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';

import AppHeader from './components/Header/Header'
import AppSidebar from './components/Sidebar/Sidebar';
import RouterOutlet from './routing/routing';

import './App.css'

const dummyChannels = [{ id: 1, name: 'Sales' }, { id: 2, name: 'Marketing' }, { id: 3, name: 'Reporting' }];

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout hasSider>
        <AppSidebar channels={dummyChannels} />
        <Layout style={{ marginLeft: 200 }}>
          <AppHeader title={'Dashboard'} />
          <Content>
            <RouterOutlet />
          </Content>
        </Layout>
      </Layout>
    </Router >
  );
};

export default App;