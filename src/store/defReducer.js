//纯函数，只承担计算 State 的功能
export function defReducer (state = {}, action) {
    // return state
    switch (action.type) {
        case 'login_success':
            console.log('---action---->',action.type)
            console.log('-----state-->',state)
            break;
    
        default:
            break;
    }
    return Object.assign({},state,action)

}