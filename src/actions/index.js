export const loadData = (loading, createFlag) => {
    return {
        type: "GET_DATA",
        loading,
        createFlag
    }
}

export const loadTask = (loading, createFlag, user_id) => {
    return {
        type: "GET_TASKS",
        loading,
        createFlag,
        user_id
    }
}

export const createUserAccount = () => {
    return {
        type: "CREATE_NEW_USER"
    }
}

export const updateUserAccount = (user_id, firstname, lastname, birthday) => {
    return {
        type: "UPDATE_USER",
        user_id,
        firstname,
        lastname,
        birthday
    }
}

export const deleteUserAccount = (user_id) => {
    return {
        type: "DELETE_USER",
        user_id
    }
}

export const createNewTask = () => {
    return {
        type: "CREATE_NEW_TASK"
    }
}

export const updateTaskInfo = (task_id, title, overview) => {
    return {
        type: "UPDATE_TASK",
        task_id,
        title,
        overview
    }
}

export const deleteTaskInfo = (task_id) => {
    return {
        type: "DELETE_TASK",
        task_id
    }
}

export const dataLoaded = (data, loading) => {
    return {
        type: "DATA_LOADED",
        data,
        loading
    }
}