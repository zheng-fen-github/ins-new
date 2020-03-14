import React,{useEffect,useState} from 'react'
import UseDataGet from './useDateGet'
import Loading from '../public/loading'

function Photo({id}) {
    const [blob,setBlob] = useState(null);
    const [src,setSrc] = useState(null);
    const [loading,setLoading] = useState(false);
    const [uncount,setUncount] = useState(false);
    
    useEffect(() => {
          (async () => {
               setLoading(true);
               let request = await fetch(`http://localhost:3001/getphoto/${id}`)
               let result =await request.blob();
               if(!uncount) {
                   setBlob(result);
                   setSrc(URL.createObjectURL(result));               
                   setLoading(false);
               }
          })()
          return () => {
              setUncount(true);
              URL.revokeObjectURL(blob);
          }
    },[])
    return (
        <div className='test has'>          
             {/* { blob &&  <img src={URL.createObjectURL(blob)} alt="照片"/>}           */}
             {
                 loading ? <Loading/> : <img src={src} alt="照片"/>
             }
             <style jsx>
                 {`
                 div {
                     height:100%;
                     min-width:100%;
                 }
                  img {
                    height:100%;
                    user-select:none;
                    animation:go .5s;
                  }
                  @keyframes go {
                        0% {
                            transform:scale(0);
                        }                        
                        100% {
                            transform:scale(1);
                        }
                    }
                 `}
             </style>
        </div>
    )
    
    
}

export default Photo
