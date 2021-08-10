import React from 'react';
import player from '../../utils/LocalStorage';
import Playing from '../../utils/useVideo';

const Video = (props) => {
    window.localStorage.setItem("pathname", props.location.pathname);
    console.log (props);
    
    const video_id = window.localStorage.getItem(player.id_video);
    /* const play = `https://www.youtube.com/embed/${video_id}?controls=2&rel=0&showinfo=0&theme=light&autoplay=1&fs=0&rel=0`; */

    // const regresar = ()=> props.history.push('/');
    const regreso= window.localStorage.getItem('back')
    const regresar = ()=> props.history.push(regreso)
        
    return (
        <>
        <div className="delimitador_video">
            <div className="contenedor_embed">
                <Playing videoId = {video_id} />
            </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-5 mt-3">
                    <button className="btn btn-outline-light me-md-2" type="button" onClick= {regresar}  >Regresar</button>
                </div>
        </div>
        </>
    );
}
 
export default Video;