import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'

const Img = styled.img`
    margin: 0 0 60px 0;
    background-size: cover;
    background-position: center;
    width:100%;
 `
const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    
`



export default ({pageContext}) => {
  
    const urlTmg = pageContext.featuredImage
    const Show = () => {
        if(urlTmg === null){
           return ( ''
           )
        }else{
            return(
                <div id="bg-img"><Img src ={pageContext.featuredImage.mediaItemUrl} /></div>
                
            )
        }
    } 
   return(
    
    <Layout>
        <div> {Show()} </div>
        <LayoutWrapper>
        <h2> {pageContext.title} </h2>
        <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
    </LayoutWrapper>
    </Layout>
   )
}

// export default PageTemplate;




