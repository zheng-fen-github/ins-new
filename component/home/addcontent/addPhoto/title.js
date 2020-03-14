import React from 'react'

function Title() {
    return (
        <div className='title'>
            <h2>New Post</h2>
            <style jsx> {`
                      .title {                          
                          height:60%;                    
                          display:flex;
                          align-items:center;
                          }                          
                        `}
           </style>
        </div>
    )
}

export default Title
