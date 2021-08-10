import React from 'react';
/* import { useEffect, useState, useCallback } from 'react';
import axios from "axios"; */


const VideoEmbed = ({videoId}) => {
    const play = `https://www.youtube.com/embed/${videoId}?controls=2&rel=0&showinfo=0&theme=light&autoplay=1&fs=0&rel=0`; 
    
    return (
        <div className="container embed ">
            <div className="row justify-content-center">
                <iframe width="864" height="486" src={play} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

      );
}
 
export default VideoEmbed;