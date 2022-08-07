import { useLocalStorage } from "@lib/hooks/useLocalStorage";
import { FavoritesContext } from "@lib/providers/favorites";
import { Product } from "@lib/types/product";
import { useCallback, useContext, useMemo } from "react";

const FAVORITES_KEY = "favorites";

export const useFavorites = () => {
    const [favorites, setValue, getValue] = useLocalStorage<Array<Product>>(FAVORITES_KEY, []);
    const { addFavorite: addFavoriteCount , removeFavorite: removeFavoriteCount } = useContext(FavoritesContext);

    const favoritesSku: Array<string> = useCallback(favorites.map(({ productSku }: Product) => productSku), [favorites]);

    const addFavorite = (product: Product) => {   
        setValue([...getValue(), product]);
        addFavoriteCount();
    }
    
    const removeFavorite = (product: Product) => {   
        setValue([...getValue().filter((p: Product) => p.productSku !== product.productSku) ]);
        removeFavoriteCount();
    }
    
    const isFavorite = (sku: string) => {
        return favoritesSku.includes(sku);
    }

    return {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }
}
