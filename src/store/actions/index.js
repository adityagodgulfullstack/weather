
const receiveStates = (states) => {
    return {
        type: 'SET_STATES',
        payload: states
    }
}

export const fetchStates = () => {
    return (dispatch) => {
        return fetch(`/mockData/states.json`)
            .then(
                response => response.json()
            )
            .then(states =>
                dispatch(receiveStates(states))
            )
    }
}