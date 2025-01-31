import './App.css';
import Title from './components/title';

let page = 1;
let MainApp;

if (page === 1) {
  MainApp = () => {
    return <iframe src="https://cryptpad.fr/code/#/2/code/view/PrKlfyiodl35f6mEzpN6MbNyEg8+QzxFFJ2WqJkoGks/p/embed/present/"></iframe>
  }
} else if (page === 2) {
  MainApp = () => {
    return <h1>page 2 || learning hub</h1>
  }
} else if (page === 3) {
    MainApp = () => {
      return <h1>page 3 || recommendations</h1>
    }
}

function App() {
  return (
    <div className='App'>
      <Title />
      <MainApp />
    </div>
  );
}

export default App;
