import { Layout, Typography } from 'antd';
import './Header.css';

const { Header } = Layout;
const { Title } = Typography;

const HeaderStyle: Record<string, string | number> = {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '35px'
}

function AppHeader(props: AppHeaderProps) {
    return (
        <Header style={HeaderStyle}>
            <Title className='header-title'><p className='header-title-text'>{props.title}</p></Title>
        </Header>
    );
}

export interface AppHeaderProps {
    title: string
}

export default AppHeader;