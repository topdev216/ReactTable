import { connect } from 'react-redux'
import DataTable from '../components/DataTable'
import { createUserAccount, updateUserAccount, deleteUserAccount, loadData } from '../actions'

const mapStateToProps = state => {
    return {
        tableData: state.getTableData, title: 'User Table', createbut: 'Create a new User'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: () => {
            dispatch(createUserAccount()) 
        },
        updateUser: (user_id, firstname, lastname, birthday) => {
            dispatch(updateUserAccount(user_id, firstname, lastname, birthday)) 
        },
        deleteUser: (user_id) => {
            dispatch(deleteUserAccount(user_id)) 
        },
        getData: () => { 
            dispatch(loadData(true, 'invisible')) 
        },
    }
}

const FullDataTable = connect(
    mapStateToProps, 
    mapDispatchToProps
)(DataTable)

export default FullDataTable