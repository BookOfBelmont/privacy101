import './styles/App.css';
import { createHashRouter, HashRouter, RouterProvider } from 'react-router';
import LandingPage from './pages/landing-page.js';
import Homepage from './pages/homepage.js';
import LearningHub from './pages/learning-hub/learning-hub.js';
import Recommendations from './pages/recommendations/recommendations.js';
import PageNotFound from './global-components/page-not-found.js';

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
