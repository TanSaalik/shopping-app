import React from 'react';
import Item from "../../presentation/Item/Item";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ShoppingList = ({
    handleIncrement,
    shoppingList,
    setShoppingList
}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.itemsList}>
            <h3><ShoppingCartIcon/> Shopping list</h3>
            {shoppingList.map(item =>
                <Item
                    item={item}
                    handleIncrement={handleIncrement}
                    itemsList={shoppingList}
                    setItemsList={setShoppingList}
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

export default ShoppingList;
