import React, { createContext, useState, useEffect } from "react";

const KEY_FAVORITES = 'favorites';

export const FavoritesContext = createContext();

const FavoritesProvider = (props) => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem(KEY_FAVORITES)));

    const addCreation = (creation) => {
        setFavorites([
            ...favorites,
            creation
        ])
    }

    const deleteCreation = (deletedCreation) => {
        let newArray = favorites.filter(creation => creation.id !== deletedCreation.id);
        setFavorites(newArray);        
    }
    
    useEffect(() => {
        localStorage.setItem(KEY_FAVORITES, JSON.stringify(favorites));
    }, [favorites]);

    if(favorites){
        return (
            <FavoritesContext.Provider
                value={{
                    favorites,
                    addCreation,
                    deleteCreation
                }}
            >
                {props.children}
            </FavoritesContext.Provider>
        );
    }else{
        return(
            <></>
        )
    }
};

export default FavoritesProvider;
