export type StateContextType = {
    activeMenu: boolean;
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
    isClicked: {
        chat: boolean;
        cart: boolean;
        userProfile: boolean;
        notification: boolean;
    };

    setIsClicked: React.Dispatch<React.SetStateAction<{
        chat: boolean;
        cart: boolean;
        userProfile: boolean;
        notification: boolean;
    }>>;
    handleClick: (pm: any) => void;
    screenSize: any;
    setScreenSize: any;
    setColor: (color: string) => void; 
    setMode: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    currentMode: string; 
    currentColor: string; 
    themeSettings: boolean;
    setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ContextProviderProps = {
    children: React.ReactNode;
};