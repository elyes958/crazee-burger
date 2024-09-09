import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone } from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => { 
    const [basket, setBasket] = useState([]);

    const handleAddToBasket = (infoProductSelected, username) => {
        // 1. copie du state
        const copy = deepClone(basket);
        // 2. manip de la copie du state
        copy.unshift(infoProductSelected);
        // 3. update du state
        setBasket(copy);
        setLocalStorage(username, copy)
    }

    const majQuantity = (inBasket, username) => {
        const copy = deepClone(basket);
        const updateQuantity = copy.map(product => product.id === inBasket.id ? inBasket : product);
        setBasket(updateQuantity);
        setLocalStorage(username, copy)
    }

    const handleDeleteInBasket = (id, username) => {
        const copy = deepClone(basket);

        const filterProducts = copy.filter((product) => product.id !== id);

        setBasket(filterProducts);
        setLocalStorage(username, filterProducts)
    }

    const handleEditInBasket = (productBeingUpdated) => {
        const copy = deepClone(basket);

        const findIndexInBasket = copy.findIndex((product) => product.id === productBeingUpdated.id);

        copy[findIndexInBasket] = productBeingUpdated;

        setBasket(copy);
    }

    return { basket, setBasket, handleAddToBasket, majQuantity, handleDeleteInBasket, handleEditInBasket}
}