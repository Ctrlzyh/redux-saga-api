import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { LOGIN_SUCEESS, LOGIN_FAILED } from './store/defReducer'
function App () {
  const dispatch = useDispatch();

  function handAction () {
    //异步的请求和复杂的逻辑放在组件里进行实现时，这个组件会显得过于臃肿
    //将这些异步请求或者是复杂的逻辑放到 action 去处理
    axios.get('https://reactnative.dev/movies.json')
      .then((data) => { console.log('----handAction-->', data) })
      .then(
        data => dispatch({ type: LOGIN_SUCEESS, ...data }),
        err => dispatch({ type: LOGIN_FAILED, err })
      )
  }

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
        <button onClick={handAction}>不使用中间件处理</button>
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
