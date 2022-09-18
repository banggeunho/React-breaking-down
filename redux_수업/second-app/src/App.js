
import './App.css';
// import CounterContainer from './containers/CounterContainer';
import TodosContianer from './containers/TodosContainer';
import ThunkContainer from './containers/ThunkContainer';

function App() {
  return (
    <div>
      <h1> Team SWEEP - 유저정보시스템</h1>
      {/* <hr/>
      <CounterContainer/> */}
      <ThunkContainer />
      <hr/>
      <TodosContianer/>

    </div>
    
  );
}

export default App;
