import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {ButtonGroup, Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const IncreaseDecreaseButtonGroup = ({
    item,
    handleIncrement,
    itemsList,
    setItemsList
}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <ButtonGroup
            className={classes.buttonGroup}
            size="small"
            orientation="vertical"
            aria-label="outlined small button group"
        >
            <Button onClick={() => handleIncrement(itemsList, setItemsList, item.itemName)}><AddIcon fontSize="small"/></Button>
            <Button onClick={() => ""}><RemoveIcon fontSize="small"/></Button>
        </ButtonGroup>
    );
}

const useStyles = makeStyles({
    buttonGroup: {
        position: 'relative',
        top: '50%',
        transform: 'translate(0, -50%)',
        backgroundColor: 'white'
    },
})

export default IncreaseDecreaseButtonGroup;
