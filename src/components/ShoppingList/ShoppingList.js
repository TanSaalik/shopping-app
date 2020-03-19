import React from 'react';
import Item from "../../presentation/Item/Item";
import {makeStyles, useTheme} from "@material-ui/core/styles";

const ShoppingList = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.itemsList}>
            <h3>Shopping list</h3>
            <Item
                itemName={'Item1'}
                description={'The first item'}
            />
            <Item
                itemName={'Item2'}
                description={'This is the second item item item'}
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

export default ShoppingList;
