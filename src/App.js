import './App.css';
import { createHashRouter, RouterProvider } from 'react-router';
import LandingPage from './pages/landing-page/landing-page.js';
import Homepage from './pages/homepage/homepage.js';
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
    path: '/privacy101/#/homepage/',
    element: <Homepage />,
  },
  {
    path: '/privacy101/#/learning-hub/',
    element: <LearningHub />,
  },
  {
    path: '/privacy101/#/recommendations/',
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
