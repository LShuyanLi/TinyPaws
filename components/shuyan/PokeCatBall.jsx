"use client";
// Displays one selectable pokeCAT ball and shows its cat preview on hover.

import { useState } from "react";

export default function PokeCatBall({ closeBall, openBall, goToPlay, catImage }) {

    const [isHover, setIsHover] = useState(false);

    function pokecatBall() {
        if (!isHover) {
            return closeBall;
        } else {
            return openBall;
        }
    }

    return (
        <div
            onClick={() => goToPlay(catImage)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
                width: "24vw",
                maxWidth: "380px",
                minWidth: "230px",
                height: "50vh",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                cursor: "pointer"
            }}
        >
        <img
            src={pokecatBall()}
            style={{
            width: "90%",
            objectFit: "contain",
            display: "block",
            }}
        />
        </div>
    );
}