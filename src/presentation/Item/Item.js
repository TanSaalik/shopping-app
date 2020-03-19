import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";

const Item = ({
    itemName,
    image,
    description
}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <div className={image ? classes.itemContainer : classes.itemContainerNoImage}>
                {image ?
                    <>
                        <div className={classes.imageContainer}>
                            <img src={image} className={classes.itemImage}/>
                        </div>
                        <div className={classes.itemDetailsContainer}>
                            <h3 className={classes.alignLeft}>{itemName}</h3>
                            <p className={classes.alignLeft}>{description}</p>
                        </div>
                    </>
                    :
                    <p className={classes.alignLeft}>{itemName}</p>
                }
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
        backgroundColor: '#ededed',
        boxShadow: '3px 5px 5px lightgray',
    },
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
    imageContainer: {
        flexBasis: '33.33%',
        backgroundColor: 'white'
    },
    itemDetailsContainer: {
        flexBasis: '66.66%',
        marginLeft: 10
    },
    itemImage: {
        position: 'relative',
        top: '50%',
        left: '50%',
        maxWidth: 100,
        maxHeight: 100,
        transform: 'translate(-50%, -50%)'
    }
})

export default Item;
