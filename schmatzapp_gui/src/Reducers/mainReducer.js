let initialState = {
    test : 123
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case 'TEST': {
            return {
                ...state,
                test: action.value
            }


        }

        default:
            return state
    }
}