import './App.css';
import SlidesList from './slides/SlidesList';

function App() {
  return (
    <div className="App">
      <SlidesList />
      <p className="warn"> <sup>*</sup> Best viewed at 976px and below</p>
    </div>
  );
}

export default App;
