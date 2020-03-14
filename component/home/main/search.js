import React from 'react'

function Search() {
    return (
        <div className='postsearch'>
             <div className="ico">
                
             </div>
             <div className="searchtext">
                <input type="text" 
                       name="posttext"
                       placeholder="what’s on your post ?"
                       autoFocus={true}
                       id="posttext"/>
             </div>
            <style jsx> {`
                          .postsearch {
                              margin:1vh 3vh 0 3vh;
                              height:6%;
                              background:black;
                              overflow:hidden;
                              border-radius:24px;
                          }  
                          .searchtext{
                              width:100%;
                              height:100%;                             
                          }          
                          .searchtext input {
                             width:100%;
                              height:100%;
                              border:none;  
                              padding-left:30px;
                              font-size:2vh;   
                              outline:none;                           
                          }
                            `}
            </style>
        </div>
    )
}

export default Search
