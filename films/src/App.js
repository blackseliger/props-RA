
import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <>
    <Stars count={5} />
    <Stars count={6} />
    <Stars count={-1} />
    <Stars count={'hehehehe'} />
    <Stars count={2} />
    </>

  );
}

export default App;
