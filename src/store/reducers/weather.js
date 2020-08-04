const weather = (state = {}, action) => {
    switch (action.type) {
        case 'SET_STATES':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default weather;