import React from 'react';
import ItemsList from "./components/ItemsList/ItemsList";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import ShoppingList from "./components/ShoppingList/ShoppingList";

const App = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.appContainer}>
            <ItemsList/>
            <ShoppingList/>
        </div>
    );
}

const useStyles = makeStyles({
    appContainer: {
        position: 'absolute',
        display: 'flex',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default App;
