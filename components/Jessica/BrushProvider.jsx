import { useState, createContext, useContext } from "react";

const BrushContext = createContext(null)

function BrushProvider({children}) {
    const [brushing, setBrushing] = useState(false)

    const toggleBrushing = () => setBrushing(prev => !prev);
    const resetBrushing = () => setBrushing(false);

    return (
        <BrushContext.Provider value={{brushing, toggleBrushing, resetBrushing}}>
            {children}
        </BrushContext.Provider>
    );
}

function useBrush() {
    const context = useContext(BrushContext);
    if (!context) throw new Error("useBrush must be used within a BrushProvider");
    return context;
}

export { BrushProvider, useBrush };