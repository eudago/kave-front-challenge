import { Product } from "@lib/types/product";
import { useEffect, useState } from "react";
import { useFavorites } from "./useFavorites";

export const useFavorite = (product: Product): [boolean, (fav: boolean) => void] => {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        setFavorite(isFavorite(product.productSku));
    }, [])

    const changeFavorite = (fav: boolean) => {
        if(!fav) addFavorite(product);
        else removeFavorite(product);

        setFavorite(!fav)
    }

    return [favorite, changeFavorite];
}