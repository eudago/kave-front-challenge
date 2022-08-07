import { useFavorites } from "@lib/hooks/useFavorites";
import { createContext, useState } from "react";

export interface FavoritesContextValue {
    favorites: number;
    addFavorite: () => void;
    removeFavorite: () => void;
}

export const FavoritesContext = createContext<FavoritesContextValue>({
    favorites: 0,
    addFavorite: () => {},
    removeFavorite: () => {},
});

interface FavoritesContextProps {
    children: React.ReactNode;
}

export const FavoritesProvider = ({children}: FavoritesContextProps) => {
    const { favorites: favoritesList } = useFavorites();
    const [favorites, setFavorites] = useState<number>(favoritesList.length);

    const value = {
        favorites,
        addFavorite: () => setFavorites((favorites) => favorites + 1),
        removeFavorite: () => setFavorites((favorites) => favorites - 1),
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}