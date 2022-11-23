import React, {createContext, useContext, useState } from 'react';
import { StateContextType, ContextProviderProps } from '../@types/Context';


const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const StateContext = createContext<StateContextType>(
    null as unknown as StateContextType,
);

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)

        setThemeSettings(false);
    }

    const setColor = (color: string) => {
        setCurrentColor(color)

        localStorage.setItem('colorMode', color)

        setThemeSettings(false);
    }

    const handleClick = (clicked: any) => {
        setIsClicked({ ...initialState, [clicked]: true})
    }

    const value = {
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor
    };

    return (
        <StateContext.Provider value={value}>{children}</StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext)