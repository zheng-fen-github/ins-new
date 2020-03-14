import React from 'react'

function SidebarSearch() {
    return (    
        <div className="search">
                    <div className="button">
                        <svg t="1577168533717" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1293" width="40" height="40"><path d="M952.064 901.39648l-167.40864-167.40864c59.72992-71.15776 95.75424-162.88768 95.75424-263.06048 0-226.1504-183.33184-409.48224-409.48224-409.48224C244.77184 61.44 61.44 244.77184 61.44 470.92224s183.33184 409.48224 409.48224 409.48224c100.1728 0 191.90272-36.0192 263.06048-95.74912l167.40864 167.40864a35.82976 35.82976 0 0 0 50.67264-50.66752zM133.09952 470.92224c0-186.27584 151.54688-337.82272 337.82272-337.82272s337.82272 151.54688 337.82272 337.82272-151.54688 337.82272-337.82272 337.82272-337.82272-151.54688-337.82272-337.82272z" fill="#666666" p-id="1294"></path></svg>
                    </div>
                    <div className="message">
                        <input type="text" name='search' id='search'
                         placeholder='search and add friend'
                        />
                    </div>
                    <style jsx> {`
                          .search {
                              width:100%;
                              height:6vh;
                              margin:0 auto;
                              background:white;
                              border-radius:12px;
                              overflow:hidden;
                              display:flex;
                          }
                          .message {
                              height:100%;
                          }
                          .message input {
                              height:100%;
                              border:none;
                              outline:none;
                              font-size:2vh;
                          }
                          .button {
                              display:flex;
                              align-items:center;
                          }
                          .button svg {
                              height:16px;
                          }
                        `}
                    </style>
         </div>        
    )
}

export default SidebarSearch
