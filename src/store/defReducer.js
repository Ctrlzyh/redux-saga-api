//reducer 必须是纯函数纯函数，只承担计算 state 的功能

export const LOGIN_SUCEESS = 'LOGIN_SUCEESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export function defReducer (state = {}, action) {
    // return state
    switch (action.type) {
        case LOGIN_SUCEESS:
            console.log('---action---->', action.type)
            console.log('-----state-->', state)
            break;

        case LOGIN_FAILED:
            break;
        default:
            break;
    }
    return Object.assign({}, state, action)
}