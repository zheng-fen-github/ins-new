import React from 'react'

function Title() {
    return (
        <div className='title'>
           <h2>Quick Chat</h2>
           <style jsx> {`
                  .title {
                      display:flex;
                      align-items:center;
                      padding-left:2vh;
                      color:#595e7c;
                  }      
                        `}
            </style>
        </div>
    )
}

export default Title
