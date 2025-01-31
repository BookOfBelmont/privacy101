import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Title from './global-components/title';
import LandingPage from './pages/landing-page/landing-page.js';
import LearningHub from './pages/learning-hub/learning-hub.js';
import Recommendations from './pages/recommendations/recommendations.js';
import PageNotFound from './global-components/page-not-found.js';

const router = createBrowserRouter([
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
    path: '/privacy101/learning-hub/',
    element: <LearningHub />,
  },
  {
    path: '/privacy101/recommendations/',
    element: <Recommendations />,
  }
]);

function App() {
  return (
    <div className='App'>
      <Title />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
