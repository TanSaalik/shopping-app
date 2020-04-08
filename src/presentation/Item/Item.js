import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import IncreaseDecreaseButtonGroup from '../IncreaseDecreaseButtonGroup/IncreaseDecreaseButtonGroup';

const Item = ({
    item,
    handleIncrement,
    itemsList,
    setItemsList,
}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <div className={classes.itemContainer}>
                <div className={classes.imageContainer}>
                    <img alt={'itemImage'} src={item.image} className={classes.itemImage}/>
                </div>
                <div className={classes.itemDetailsContainer}>
                    <h3 className={classes.alignLeft}>{item.itemName}</h3>
                    <p className={classes.alignLeft}>{item.description}</p>
                    <p>{item.shoppingCount}</p>
                </div>
                <div className={classes.buttonGroupContainer}>
                    <IncreaseDecreaseButtonGroup
                        handleIncrement={handleIncrement}
                        item={item}
                        itemsList={itemsList}
                        setItemsList={setItemsList}/>
                </div>
            </div>
        </>
    );
}

const useStyles = makeStyles({
    itemContainer: {
        display: 'flex',
        maxWidth: 400,
        minHeight: 100,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#A3B2C3',
        boxShadow: '3px 5px 5px lightgray',
    },
    itemContainerNoImage: {
        display: 'flex',
        maxWidth: 400,
        minHeight: 30,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#A3B2C3',
        boxShadow: '3px 5px 5px lightgray',
    },
    alignLeft: {
        textAlign: 'left',
    },
    imageContainer: {
        flexBasis: '30%',
        backgroundColor: 'white'
    },
    itemDetailsContainer: {
        flexBasis: '60%',
        marginLeft: 10
    },
    itemImage: {
        position: 'relative',
        top: '50%',
        left: '50%',
        maxWidth: 100,
        maxHeight: 100,
        transform: 'translate(-50%, -50%)'
    },
    buttonGroupContainer: {
        flexBasis: '10%',
        marginLeft: 'auto',
    },
})

export default Item;
