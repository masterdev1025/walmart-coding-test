const initState = {
    users: [],
    usersLoading: false,
    error: null,
    ageItems: [],
    ageItemLoading: false,
    ageList: [],
    ageListLoading: false
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case "GET_USERS_REQUEST":
            return {
                ...state,
                usersLoading: true,
                error: null
            }
        case "GET_USERS_SUCCEED":
            return {
                ...state,
                usersLoading: false,
                error: null,
                users: action.payload
            }
        case "GET_USERS_FAILED":
            return {
                ...state,
                usersLoading: false,
                error: action.payload,
                users: []
            }
        case "GET_AGE_ITEMS_REQUEST":
            return {
                ...state,
                ageItemLoading: true,
                error: null
            }
        case "GET_AGE_ITEMS_SUCCEED":
            return {
                ...state,
                ageItemLoading: false,
                error: null,
                ageItems: action.payload
            }
        case "GET_AGE_ITEMS_FAILED":
            return {
                ...state,
                ageItemLoading: false,
                error: action.payload,
                ageItems: []
            }
        case "GET_AGE_LIST_REQUEST":
            return {
                ...state,
                ageListLoading: true,
                error: null
            }
        case "GET_AGE_LIST_SUCCEED":
            return {
                ...state,
                ageListLoading: false,
                error: null,
                ageList: action.payload
            }
        case "GET_AGE_LIST_FAILED":
            return {
                ...state,
                ageListLoading: false,
                error: action.payload,
                ageList: []
            }
        default:
            return state
    }
}

export default reducer;