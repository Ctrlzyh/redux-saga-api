import './App.css';
import { useDispatch,useSelector } from 'react-redux'

function App () {
  const dispatch = useDispatch();

  function handleTakeEvery () {
    dispatch({
      type: 'takeEvery',
    })
  }
  function handleTakeLatest () {
    dispatch({
      type: 'takeLatest'
    })
  }
  function handleThrottle () {
    dispatch({
      type: 'throttle'
    })
  }
  function handleTakeEverySelect () {
    dispatch({
      type: 'takeEverySelect',
      user: ({
        username: '湛益红',
        password: '123123'
      })
    })
  }

  function handleTakeEveryCall () {
    dispatch({
      type: 'takeEveryCall',
    })
  }

  function handleTakeEveryTake () {
    dispatch({
      type: 'takeEveryTake',
    })
  }

  function handleTakeEveryPut () {
    dispatch({
      type: 'takeEveryPut',
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleTakeEvery}>点击发送takeEvery</button>
        <button onClick={handleTakeLatest}>点击发送takeLatest</button>
        <button onClick={handleThrottle}>点击发送throttle</button>
        <button onClick={handleTakeEverySelect}>点击API-select</button>
        <button onClick={handleTakeEveryCall}>点击API-call</button>
        <button onClick={handleTakeEveryTake}>点击API-take</button>
        <button onClick={handleTakeEveryPut}>点击API-put</button>
      </header>
    </div>
  );
}

export default App;
