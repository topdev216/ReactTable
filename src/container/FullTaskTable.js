import { connect } from 'react-redux'
import DataTable from '../components/DataTable'
import { createNewTask, loadTask, updateTaskInfo, deleteTaskInfo } from '../actions'

const mapStateToProps = (state) => {
    return {
        tableData: state.getTableData, title: "Task Table", createbut: "Create a new Task"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: () => {
            dispatch(createNewTask()) 
        },
        updateTask: (task_id, title, overview) => {
            dispatch(updateTaskInfo(task_id, title, overview)) 
        },
        deleteTask: (task_id) => {
            dispatch(deleteTaskInfo(task_id)) 
        },
        getTasks: (user_id) => { 
            dispatch(loadTask(true, 'invisible', user_id)) 
        },
    }
}

const FullTaskTable = connect(
    mapStateToProps, 
    mapDispatchToProps
)(DataTable)

export default FullTaskTable