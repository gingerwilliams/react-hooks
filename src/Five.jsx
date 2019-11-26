import React, { useState, useContext } from "react";
import { PlayerContext } from "./Context";

const Five = () => {
    const player = useContext(PlayerContext);
    console.log(player);
    //const [] = useState()
    return (
        <div>
            Five {player.firstname} {player.lastname} {player.email}
        </div>
    );
};

export default Five;
