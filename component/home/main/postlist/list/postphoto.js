import React from 'react'
import OpenBu from './openbu'
import PhotoContent from './photocontent2'

function Postphoto({Ev,photoId}) { 
  
    return (
        <div className="photoContainer">
                <PhotoContent data = {photoId}/>
                {/* <OpenBu Ev={Ev}/>   */}
                <style jsx> {`                        
                 .photoContainer {
                    position:relative;
                    width:100%;
                    height:calc(50vw - 12vh);
                    overflow:hidden;          
                 } 
                                      
                        `}
                 </style>            
          </div>
        
    )
}

export default Postphoto
