import { appActions } from "./actions"

export const defaultState = {
    data: {},
    isFetching: false,
    isFetched: false,
    error: null,
}

export const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case appActions.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isFetching: false,
                isFetched: true,
            }

        case appActions.FETCH_DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                isFetched: false,
                error: action.payload.error,
            }

        case appActions.FETCH_DATA_REQUEST:
            return {
                ...state,
                isFetching: true,
                isFetched: false
            }

        default:
            return state
    }
}
