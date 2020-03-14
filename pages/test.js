import React,{useState} from 'react'
import Error from '../component/home/chat/index-error'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Comment = dynamic(import('../component/test-component/dymain'),{
    loading: () => <p>... hehehehehehehehehe</p>
  });

function Test() {
    const [STATUS, setSTATUS] = useState(false);
    return (
        
        <div>
            <Head>
            <title>My test</title>
            <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
                    />
            <link rel="stylesheet" href="//at.alicdn.com/t/font_1492911_fp5zlq6dxvp.css"/>
            </Head>
            <i className="iconfont icon-aixin" onClick={() => setSTATUS(true)}></i>
            {/* <Error/> */}
            {STATUS && <Comment/>}
            <style jsx>
                  {`
                  i {
                      
                       color:red;
                       font-size:2rem;
                  }
                  `}
            </style>
        </div>
    )
}

export default Test
