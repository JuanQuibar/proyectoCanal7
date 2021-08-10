import React from 'react';
// import axios from 'axios';
import { useEffect, useState } from 'react';


const Playing = ({videoId}) => {
    const [player, setPlayer]= useState('');
    
    useEffect(()=>{
        const player = (`https://www.youtube.com/embed/${videoId}?controls=2&rel=0&showinfo=0&theme=light&autoplay=1&fs=0&rel=0`); 
        setPlayer(player);
        

    },[videoId])
    
    return (
        <>
        {/* <div className="container embed "> */}
            {/* <div className="row justify-content-center"> */}
                <iframe  src={player} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* </div> */}
        {/* </div> */}
        </>
      );
}
 
export default Playing;