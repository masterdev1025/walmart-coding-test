import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import { getAgeItems, getAgeList } from '../../services/actions';

const AgeSelect = (props) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        props.actions.getAgeList(event.target.value)

    };

    useEffect(() => {
        props.actions.getAgeItems();
    }, [])
    console.log(props)
    return (
        <Box sx={{ minWidth: 120, marginTop: '20px' }}>
            <Typography variant="h5" color="inherit" component="div" style={{ padding: '3px 20px' }}>
                Age Demographic of Users With { age ? age : '__' }
            </Typography>
            <FormControl style={{ width: '30%' , padding: '3px 20px'}}>
                <Select
                    value={age}
                    fullWidth
                    onChange={handleChange}
                >
                    {
                        props.ageItems && props.ageItems.map((item, index) => (
                            <MenuItem value = {item} key = {index}>{item}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
}

export default connect((state) => {
    return {
        ageItems: state.ageItems
    }
}, (dispatch) => {
    return {
        actions: bindActionCreators({ getAgeItems, getAgeList }, dispatch)
    }
})(AgeSelect);