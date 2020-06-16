import React, {useState} from 'react';
import ItemsList from "./components/ItemsList/ItemsList";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import StockList from "./components/StockList/StockList";
import {connect} from 'react-redux';
import * as actions from "./actions";
import _ from 'lodash';

const App = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [shoppingList, setShoppingList] = useState([]);
    const [stockList, setStockList] = useState([]);
    const [itemsList, setItemsList] = useState([
        {
            itemName: 'Leibur RÖST',
            description: 'Viilutatud mitmevilja röstsai',
            image: 'https://www.selver.ee/media/klevu_images/4/7/4740072254357.jpg',
            shoppingCount: 0,
            stockCount: 0,
        },
        {
            itemName: 'Alma piim',
            description: '1.5l lehmapiim 2.5%',
            image: 'https://m1.selver.ee/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/4/7/4740125000108.jpg',
            shoppingCount: 0,
            stockCount: 0,
        },
        {
            itemName: 'Veise vürtsisink',
            description: 'Oskar viilutatud veise vürstisink',
            image: 'https://www.selver.ee/media/klevu_images/4/7/4740569009194.jpg',
            shoppingCount: 0,
            stockCount: 0,
        },
        {
            itemName: 'Paulig kohvioad 1kg',
            description: 'Paulig classic 1kg kohvioad. Keskmine röst.',
            image: 'https://www.selver.ee/media/klevu_images/6/4/6411300164783.jpg',
            shoppingCount: 0,
            stockCount: 0,
        }
    ]);

    const renderToDo = () => {
        const {data} = this.props;
        const shoppingItems = _.map(data, (value, key) => {
            return <div> {`${key} asd ${value}`} </div>;
        });
        if (!_.isEmpty(shoppingItems)) {
            return shoppingItems;
        }
        return (
            <div>
                <h4>You have no more things</h4>
            </div>
        );
    }

    const handleIncrement = (list, setList, incrementedItem) => {
        const safeList = [...list];
        if (safeList.some(item => item.itemName === incrementedItem.itemName)){
            const index = safeList.findIndex(item => item.itemName === incrementedItem.itemName);
            safeList[index].shoppingCount++;
            setList(safeList);
        } else {
            safeList.push({...incrementedItem, shoppingCount: 1});
            actions.addShoppingItem({...incrementedItem, shoppingCount: 1});
            setList(safeList);
        }
    }

    return (
        <div className={classes.appContainer}>
            <ItemsList
                handleIncrement={handleIncrement}
                itemsList={itemsList}
                shoppingList={shoppingList}
                setItemsList={setShoppingList}/>
            <ShoppingList
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
                stockList={stockList}
                setStockList={setStockList}
                handleIncrement={handleIncrement}/>
            <StockList
                stockList={stockList}
                setStockList={setStockList}
                handleIncrement={handleIncrement}/>
            renderToDo();
        </div>
    );
}

const mapStateToProps = ({data}) => {
    return {
        data
    }
}

const useStyles = makeStyles({
    appContainer: {
        position: 'absolute',
        display: 'flex',
        left: '50%',
        transform: 'translate(-50%, 0)',
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default connect(mapStateToProps, actions)(App);
