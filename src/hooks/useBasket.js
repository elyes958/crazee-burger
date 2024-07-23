import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone } from "../utils/array";

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY);

    const handleAddToBasket = (infoProductSelected) => {
        const copy = deepClone(basket);
        copy.unshift(infoProductSelected);
        setBasket(copy);
    }

    const majQuantity = (inBasket) => {
        const copy = deepClone(basket);
        const updateQuantity = copy.map(product => product.id === inBasket.id ? inBasket : product);
        setBasket(updateQuantity);
    }

    const handleDeleteInBasket = (id) => {
        const copy = [...basket];

        const filterProducts = copy.filter((product) => product.id !== id);

        setBasket(filterProducts);
    }

    return { basket, handleAddToBasket, majQuantity, handleDeleteInBasket }
}