import './styles/App.css';
import { createHashRouter, HashRouter, RouterProvider } from 'react-router';
import LandingPage from './pages/landing-page.jsx';
import Homepage from './pages/homepage.jsx';
import LearningHub from './pages/learning-hub/learning-hub.jsx';
import Recommendations from './pages/recommendations/recommendations.jsx';
import PageNotFound from './global-components/page-not-found.jsx';
import Favicon from './global-components/favicon.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/privacy101',
    element: <LandingPage />,
  },
  {
    path: '/homepage',
    element: <Homepage />,
  },
  {
    path: '/learning-hub',
    element: <LearningHub />,
  },
  {
    path: '/recommendations',
    element: <Recommendations />,
  },
  {
    path: '/favicon',
    element: <Favicon />,
  }
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
