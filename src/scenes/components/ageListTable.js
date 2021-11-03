import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import LoadingCircle from './loadingCircle';
const AgeListTable = (props) => {
    return (
        <TableContainer component={Paper} style={{ marginTop: "30px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Age</TableCell>
                        <TableCell>Count</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.ageList && !props.loading && props.ageList.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.age}</TableCell>
                                <TableCell>{item.count}</TableCell>
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
            ageList: state.ageList,
            error: state.error,
            loading: state.ageListLoading
        }
    },
    null
)(AgeListTable);