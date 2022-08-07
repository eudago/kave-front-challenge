import { useEffect, useState } from "react";

export interface FavoriteButtonProps {
    favorite: boolean;
    changeFavorite?: (favorite: boolean) => void;
}

export default function FavoriteButton({favorite, changeFavorite}: FavoriteButtonProps) {
    const [fav, setFav] = useState(false);

    //Execute favorite only in csr
    useEffect(() => {
        setFav(favorite);
    }, [favorite]);

    return (
        <div onClick={() => {!!changeFavorite && changeFavorite(favorite)}}>
            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5896 19.9792C10.3249 18.9707 4.97472 14.5893 1.83501 10.1792C0.144827 7.45951 1.21896 3.80273 3.28639 2.08767C5.54709 0.21643 8.45265 0.778278 11.2625 3.62942C11.2829 3.64942 11.308 3.65894 11.3313 3.67418C11.3591 3.69417 11.3851 3.71893 11.4158 3.73131C11.44 3.74179 11.4651 3.74084 11.4901 3.74655C11.5236 3.75417 11.5561 3.76655 11.5896 3.76655C11.6249 3.76655 11.6583 3.75417 11.6927 3.74655C11.7169 3.74084 11.741 3.74084 11.7633 3.73131C11.7968 3.71798 11.8237 3.69227 11.8535 3.67132C11.8739 3.65608 11.8981 3.64846 11.9166 3.62942C14.7283 0.777325 17.6348 0.217382 19.8918 2.08767C21.9602 3.80273 23.0343 7.46046 21.3441 10.1792C18.2063 14.5874 12.8551 18.9698 11.5896 19.9792" 
                    stroke="black" 
                    strokeWidth="1.3" 
                    fill={fav ? 'rgb(255, 61, 58)': 'none'}
                />
            </svg>
        </div>
    )
}