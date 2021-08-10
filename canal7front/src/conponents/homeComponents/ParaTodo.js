import React from 'react';
import ListaVideos from '../ListaVideos';
import { useGet } from '../../utils/useHTTP';

const ParaTodo = ({props, cantidad, class_col_bootstrap}) => {
    console.log (props)

    const url = 'https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyB5fgzQfbpF-6_HSQ5k2slhlvaXb6-PRdg&channelId=UC64ZNqX0FQHabP8iIkmnR3A&playlistId=PLDedS24i-fT8T6pYRJhPbLX1O4FDVj1wK&part=snippet,id&&order=date&maxResults=24';

    const [programas, error] = useGet ({ url: url });
    
    const cantidad_videos = cantidad;
    const cantidad_columnas = class_col_bootstrap;
    const listar = programas.slice(0, (cantidad_videos));

    const VerVideo =() =>{
        props.history.push('/play_video')
    }

    return (
        <>
        {error ? (<h2 className="text-danger">HUBO UN ERROR</h2>)
            : <>
            <ListaVideos data = {listar} click={VerVideo} colum={cantidad_columnas} />
            </>
        }
        </>
    );
}
 
export default ParaTodo;