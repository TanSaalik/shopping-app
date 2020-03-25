import React from 'react';
import Item from "../../presentation/Item/Item";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import ViewListIcon from '@material-ui/icons/ViewList';

const ItemsList = ({
    handleIncrement,
    itemsList,
    setItemsList,
    shoppingList
}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.itemsList}>
            <h3><ViewListIcon/> Items list</h3>
            {itemsList.map(item =>
                <Item
                    item={item}
                    itemsList={shoppingList}
                    setItemsList={setItemsList}
                    handleIncrement={handleIncrement}
                />
            )}
        </div>
    );
}

const useStyles = makeStyles({
    itemsList: {
        paddingLeft: 10,
        minWidth: 400
    }
})

export default ItemsList;
