import React, {Component} from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import Navigation from '../components/navigation'

const Img = styled.img`
   background-size: cover;
    background-position: center;
    width:100%;
 `
const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    
`


export default ({pageContext}) => {
    return (
     <div>
        <Layout>
        {/* <div> {show()} </div> */}
    {/* <Img src ={data.pageContext.featuredImage.mediaItemUrl} /> */}
        <LayoutWrapper>
            <Navigation data={pageContext}/>
        <h2 dangerouslySetInnerHTML= {{__html: pageContext.title}} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
    </LayoutWrapper>
    </Layout>
     </div>
    )
}


// export default PostTemplate;





