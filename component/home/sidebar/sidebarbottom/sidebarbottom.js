import React from 'react'
import NavList from './navlist.js'
import Set from './set.js'
import Cat from './catList/index'



function Sidebarbottom({save,like}) {
    return (
        <div className='bottom'>
           <NavList save={save} like={like}> 
               <Cat/>
           </NavList>        
           <Set/>
            <style jsx> {`
                    .bottom {
                        width:100%;
                        height:70%;
                        background:#eeeef4;
                        padding:10%;
                        position:relative;
                        z-index:6;
                    }     
                      
                            `}
            </style>
        </div>
    )
}

export default Sidebarbottom
