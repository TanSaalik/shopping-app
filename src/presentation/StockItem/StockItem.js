import React, {useState} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";

const StockItem = ({
    itemName
}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [count, setCount] = useState(0)

    return (
        <>
            <div className={classes.itemContainerNoImage}>
                <div className={classes.itemDetailsContainer}>
                    <p className={classes.alignLeft}>{count}x {itemName}</p>
                </div>
            </div>
        </>
    );
}

const useStyles = makeStyles({
    itemContainerNoImage: {
        display: 'flex',
        maxWidth: 400,
        minHeight: 30,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ededed',
        boxShadow: '3px 5px 5px lightgray',
    },
    alignLeft: {
        textAlign: 'left',
    },
    itemDetailsContainer: {
        marginLeft: 10,
    },
})

export default StockItem;
