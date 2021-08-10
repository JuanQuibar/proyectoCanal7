import React from 'react';
import SingleVideo from './SingleVideo';

const ListaVideos = ({ data, click, colum}) => {
    
   return (
    
        <div className="contenedor row">
            
            {data.map((programa) => { 

                return(
                    
                    <div className={`col-${colum} mb-4`}  key={programa.id} onClick={click}>
                                <SingleVideo programa= {programa} />
                    </div>

                ); 

            })}

        </div>
      
    ) 

};
 
export default ListaVideos;