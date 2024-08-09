import { connect } from 'react-redux';

import { decreaseCounter, increaseCounter } from './Components/ReduxBasic/Action/Counter/CounterAction';
import { getALLUserStart } from './Components/ReduxBasic/Action/User/UserAction';
import { useEffect } from 'react';

function App(props) {

  useEffect(() => {
    props.getALLUser();
  }, [])

  return (
    <div className="App">
      <div>Count:{props.count}</div>
      <button onClick={() => props.increaseCounter()}>Increase Count</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    getALLUser: () => dispatch(getALLUserStart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
