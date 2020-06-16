import {shoppingItemsRef} from '../firebase';
export const FETCH_SHOPPING_ITEMS = 'FETCH_SHOPPING_ITEMS';

export const addShoppingItem = newShoppingItem => {
    shoppingItemsRef.push().set(newShoppingItem);
};

export const completeShoppingItem = completeShoppingItem => {
    shoppingItemsRef.child(completeShoppingItem).remove();
};

export const fetchShoppingItems = () => async dispatch => {
    await shoppingItemsRef.on("value", snapshot => {
        dispatch({
            type: FETCH_SHOPPING_ITEMS,
            payload: snapshot.val()
        });
    });
};