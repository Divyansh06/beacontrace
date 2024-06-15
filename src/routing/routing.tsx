import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

function RouterOutlet() {
    const Overview = lazy(() => import('./pages/Overview/Overview'));
    const ApiKeys = lazy(() => import('./pages/ApiKeys/ApiKeys'));
    const Analytics = lazy(() => import('./pages/Analytics/Analytics'));
    const Channel = lazy(() => import('./pages/Channel/Channel'));

    const routingConfig = [
        {
            key: 'Overview',
            path: '/overview',
            component: <Overview />
        },
        {
            key: 'Api Keys',
            path: '/api-keys',
            component: <ApiKeys />
        },
        {
            key: 'Analytics',
            path: '/analytics',
            component: <Analytics />
        },
        {
            key: 'Channel',
            path: '/channel/:channelId',
            component: <Channel />
        },
        {
            key: 'Overview',
            path: '*',
            component: <Navigate to={'/overview'} replace />
        },
    ]


    return (
        <Routes>
            {routingConfig.map(route =>
                <Route
                    key={route.key}
                    path={route.path}
                    element={<Suspense fallback={<h1>Loading...</h1>}>{route.component}</Suspense>}
                />
            )}
        </Routes>
    );
}

export default RouterOutlet;