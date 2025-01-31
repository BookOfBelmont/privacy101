import './App.css';
import Title from './components/title';

let page = 'landing-page';
let MainApp;

if (page === 'landing-page') {
  MainApp = () => {
    return <iframe src="https://cryptpad.fr/code/#/2/code/view/qXCjFOMYKmJVkFBDaHh+DJqNiNzLfOwRNcR+b0OnMt4/p/embed/present/"></iframe>
  }
}

function App() {
  return (
    <div className='App'>
      <Title />
      <MainApp className="app" />
    </div>
  );
}

export default App;
