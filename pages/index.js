import React,{useEffect,useState} from 'react'
import Logo from '../component/login/logo'
import Form from '../component/login/form'
import SignUpAll from '../component/signup/index'
import Error from '../component/signup/error'
import Head from 'next/head'



function Index() {
    const [error, setError] = useState('')
    const Ev = (value) => {
        setError(value);
    }
    return ( 
        <div id='BG'>
            <Head>
                <title>cool next</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />                
            </Head>
            <Logo/>
            <div className='text'>
                <p>sign in to zf.zom</p>
            </div>
            <Form Ev={Ev}/>             
            <SignUpAll/>    
            <Error error={error} errorEv={Ev} aaastyle='errorStyle'/>                   
            <style jsx global>{`
                * {  margin:0;
                    padding:0;
                }
                
                `}
            </style>
            <style jsx>{`

            #BG {
                padding-top:0;            
                background-image:url(bg.jpg);
                background-position:center;
                width:100vw;
                height:100vh;
                overflow:hidden;
                position:relative;
            }
            .text{
                color:white;
                font-weight:800;            
                margin:0 auto;
                margin-top:2vh;            
                font-size:3vh;
                letter-spacing:3px;
                text-align:center;
            }
            `}
            </style>
        </div>
        
    )
}

export default Index
