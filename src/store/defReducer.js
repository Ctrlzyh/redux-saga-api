//纯函数，只承担计算 State 的功能

const LOGIN_SUCEESS  =  'LOGIN_SUCEESS'
  
export function defReducer (state = {}, action) {
    // return state
    switch (action.type) {
        case LOGIN_SUCEESS:
            console.log('---action---->',action.type)
            console.log('-----state-->',state)
            break;
    
        default:
            break;
    }
    return Object.assign({},state,action)

}