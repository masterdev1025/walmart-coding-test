const getUsersRequest = () => {
    return {
        type: "GET_USERS_REQUEST"
    }
}

const getUsersSucceed = (users) => {
    return {
        type: "GET_USERS_SUCCEED",
        payload: users
    }
}

const getUsersFailed = (error) => {
    return {
        type: "GET_USERS_FAILED",
        payload: error
    }
}

const getUsers = () => {
    return (dispatch) => {
        dispatch( getUsersRequest() );
        fetch( 'http://localhost:3001/users' ).then(data=>data.json()).then((users) => {
            dispatch( getUsersSucceed(users) )
        })
        .catch(error => {
            dispatch( getUsersFailed(error.message) )
        })
    }
}

const getAgeItemsRequest = () => {
    return {
        type: "GET_AGE_ITEMS_REQUEST"
    }
}

const getAgeItemsSucceed = (ageItmes) => {
    return {
        type: "GET_AGE_ITEMS_SUCCEED",
        payload: ageItmes
    }
}

const getAgeItemsFailed = (error) => {
    return {
        type: "GET_AGE_ITEMS_Failed",
        payload: error
    }
}

const getAgeItems = () => {
    return (dispatch) => {
        dispatch( getAgeItemsRequest() );
        fetch( 'http://localhost:3001/users/age' ).then(data=>data.json()).then((ageItmes) => {
            dispatch( getAgeItemsSucceed(ageItmes) )
        })
        .catch(error => {
            dispatch( getAgeItemsFailed(error.message) )
        })
    }
}

const getAgeListRequest = () => {
    return {
        type: "GET_AGE_LIST_REQUEST"
    }
}

const getAgeListSucceed = (ageList) => {
    return {
        type: "GET_AGE_LIST_SUCCEED",
        payload: ageList
    }
}

const getAgeListFailed = (error) => {
    return {
        type: "GET_AGE_LIST_SUCCEED",
        payload: error
    }
}

const getAgeList = (item) => {
    return (dispatch) => {
        dispatch( getAgeListRequest() );
        fetch( `http://localhost:3001/users/age?item=${item}` ).then(data=>data.json()).then((ageList) => {
            dispatch( getAgeListSucceed(ageList) )
        })
        .catch(error => {
            dispatch( getAgeListFailed(error.message) )
        })
    }
}

export {
     getUsers, 
     getUsersFailed, 
     getUsersSucceed, 
     getUsersRequest,
     getAgeItems,
     getAgeItemsSucceed,
     getAgeItemsFailed,
     getAgeItemsRequest,
     getAgeList,
     getAgeListFailed,
     getAgeListSucceed,
     getAgeListRequest
}