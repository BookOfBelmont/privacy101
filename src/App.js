import logo from './logo.svg';
import './App.css';

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
      <MainApp className="app" />
    </div>
  );
}

export default App;
