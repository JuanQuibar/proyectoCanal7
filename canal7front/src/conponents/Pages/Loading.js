import React from 'react';

const Loading = (props) => {
    // window.localStorage.setItem("pathname", props.location.pathname);
    return (
        <>
        
            <div className="loading">
                <div class="spinner-border text-primary spinner "  role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        
        </>
      );
}
 
export default Loading;