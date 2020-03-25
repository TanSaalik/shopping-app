import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import StockItem from "../../presentation/StockItem/StockItem";
import HouseIcon from '@material-ui/icons/House';

const StockList = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.itemsList}>
            <h3><HouseIcon/> Stock list</h3>
            <StockItem
                itemName={'Item1'}
            />
        </div>
    );
}

const useStyles = makeStyles({
    itemsList: {
        paddingLeft: 10,
        minWidth: 400
    }
})

export default StockList;
