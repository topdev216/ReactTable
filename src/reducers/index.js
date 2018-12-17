const getTableData = (state = {data:[], loading: false}, action) => {
    switch (action.type){
        case 'DATA_LOADED':
            return {...state, data: action.data, loading: action.loading}
        case 'GET_DATA':
            return {...state, loading: true};
        case 'GET_TASKS':
            return {...state, loading: true, user_id: action.user_id};
        default:
            return state
    }
}

export default getTableData