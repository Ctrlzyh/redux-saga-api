//中间件就是一个函数，在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。

// 1.不使用middleware时，在dispatch(action)时会执行rootReducer，并根据action的type更新返回相应的state。
// 2.而在使用middleware时，middleware会将我们当前的action做相应的处理。
// 在增加了 middleware 后，我们就可以在这途中对 action 进行截获，并进行改变。
// 随后将新的action再交给其他中间件处理，最后产生新的action给rootReducer执行。

// action1(plain object)——>redux-saga监听—>执行相应的Effect方法——>返回描述对象—>恢复执行异步和副作用函数—>action2(plain object)


import { call, put, select, take, takeEvery, takeLatest, throttle, fork, all, race, delay } from 'redux-saga/effects'
import axios from 'axios'
import { LOGIN_SUCEESS, LOGIN_FAILED } from './defReducer'

// ES6 的 generator 函数
export function* defSaga () {
    //辅助函数，监听action,触发saga函数调用
    yield takeEvery('takeEvery', function* () {
        yield console.log('takeEvery----->')
    })

    yield takeLatest('takeLatest', function* () {
        yield delay(1000)
        yield console.log('takeLatest----->')
    })

    yield throttle(2000, 'throttle', function* () {
        yield console.log('throttle----->')
    })

    //获取redux中的state
    yield takeEvery('takeEverySelect', function* () {
        yield console.log('takeEverySelect----->')
        const user = yield select(state => state.user)
        yield console.log('user----->', user)
    })

    //创建一个Effect描述信息，用来命令middleware 以参数args调用函数fn
    yield takeEvery('takeEveryCall', function* () {
        yield console.log('takeEveryCall----->')
        const res = yield call(axios.get, 'https://reactnative.dev/movies.json')
        yield console.log('res----->', res.data)
    })

    //阻塞方法，用来匹配发出的action
    yield take('takeEveryTake')
    yield console.log('takeEveryTake--匹配--->')

    // //非阻塞方法，用来匹配发出的action
    // yield fork('takeEveryTake')
    // yield console.log('takeEveryTake--匹配--->')

    //向store发起一个action
    yield takeEvery('takeEveryPut', function* () {
        yield console.log('takeEveryPut----->')
        try {
            const res = yield call(axios.get, 'https://reactnative.dev/movies.json')
            yield put({
                type: LOGIN_SUCEESS,
                ...res.data
            })
        } catch (err) {
            yield put({ type: LOGIN_FAILED, err })
        }
    })


    // //用来命令 middleware 并行地运行多个阻塞型调用
    // yield takeEvery('takeEveryPut', function* () {
    //     yield all([
    //         call(axios.get, 'https://reactnative.dev/movies.json'),
    //         call(axios.get, 'https://reactnative.dev/movies.json')
    //     ])
    // })

    //   //两个 effect 间运行了一次竞赛,后完成的结果将是 undefined
    //   yield takeEvery('takeEveryPut', function* () {
    //     yield race([
    //         call(axios.get, 'https://reactnative.dev/movies.json'),
    //         take('takeEveryTake')
    //     ])
    // })


}
