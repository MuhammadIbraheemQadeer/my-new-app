/*import React, { useState } from 'react';
import './ShoppingCart.css';

function ShoppingCart() {
    const [total, setTotal] = useState(0);
    const [price, setPrice] = useState();
    const [item, setItem] = useState(0);
    const [itemName, setItemName] = useState('');

    const add = () => {
        setTotal(total + Number(price));
        setItem(item + 1);
    }

    const remove = () => {
        if (total > 0) {
            setTotal(total - Number(price));
            setItem(item-1);
        } 
    }

    const reset = () => {
        setTotal(0);
        setItem(0);
        setPrice('');
        setItemName('')

    }

    const priceReset = () => {
        setPrice('');
        setItemName('')
    }

    return (
        <div className="cart-container">
            <h1 className="cart-title">Total Amount: ${total}</h1>
            <p>Item Count: {item}</p>
            <p>Last item added: {itemName} ${price}</p>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter name of item"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="price-input"
                />
                <input
                    type="number"
                    placeholder="Enter price of item"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="price-input"
                />
            </div>
            <div className="button-container">
                <button onClick={add} className="action-button add-button">Add item price</button>
                <button onClick={priceReset} className="action-button reset-button">Reset price input</button>
                <button onClick={remove} className="action-button remove-button">Subtract item price</button>
                <button onClick={reset} className="action-button reset-button">Reset total amount</button>
            </div>
        </div>
    );
}

export default ShoppingCart;*/
