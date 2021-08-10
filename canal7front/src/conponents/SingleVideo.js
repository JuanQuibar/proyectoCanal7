import React from 'react';
import player from '../utils/LocalStorage';
import play_black from '../img/play_black.png';
import play_red from '../img/play_red.png';
// import moment from 'moment';

const SingleVideo = ( {programa} ) => {

    
    const modal = ()=>{
        window.localStorage.setItem(player.id_video, programa.snippet.resourceId.videoId);
    }

    /* moment.locale("es");
    const fecha = programa.snippet.publishedAt;
    const fecha_moment = moment(fecha).format('LL')
    console.log("esto es prueba", fecha_moment) */
    
    
    return (
        <>
        <div onClick={modal} className="single bg-light">
            <div className="insert_play">
                <img className="thumbnails" src={programa.snippet.thumbnails.high.url} alt="imagen_programa" />
                <img src={play_black} alt="" className="play_black" />
                <img src={play_red} alt="" className="play_red" />
            </div>
            <p className="small fecha"> <small> {new Date(programa.snippet.publishedAt).toLocaleDateString()} </small></p>
            <h6  className="titulo"> {programa.snippet.title}</h6>
        </div> 
        </>
        
    );
};
 
export default SingleVideo;