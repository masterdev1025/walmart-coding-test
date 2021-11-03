import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LoadingCircle from './loadingCircle';
import { getUsers } from '../../services/actions';

const UsersTable = (props) => {
    useEffect(() => {
        props.actions.getUsers();
    }, [])
    return (
        <TableContainer component={Paper} style={{ marginTop: "30px" }}>
            <Typography variant="h5" color="inherit" component="div" style={{ padding: '3px 20px' }}>
                All Users
            </Typography>
            <Typography color="inherit" component="div" style={{ padding: '3px 20px' }}>
                Users and their age
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.users && props.users.map((user, index) => (
                            <TableRow key = { index }>
                                <TableCell>{ user.username }</TableCell>
                                <TableCell>{ user.age }</TableCell>
                            </TableRow>
                        ))
                    }
                     {
                        props.loading && <TableRow>
                            <TableCell colSpan="2">
                                <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center' }}>
                                    <LoadingCircle />
                                </Box>

                            </TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default connect(
    (state) => {
        return {
            users: state.users,
            error: state.error,
            loading: state.usersLoading
        }
    },
    (dispatch) => {
        return {
            actions: bindActionCreators({ getUsers }, dispatch)
        }
    }
)(UsersTable);