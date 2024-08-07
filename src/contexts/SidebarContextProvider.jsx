"use client"
import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(true);


    return (
        <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
            <div>
                {children}
            </div>
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    return useContext(SidebarContext);
};
