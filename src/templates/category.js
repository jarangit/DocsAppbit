import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import { Link } from 'gatsby'


//Style
const Img = styled.img`
    width:100%;
 `
const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
`

const BlockItem = styled.div`
    padding:15px;
    max-width: 300px;
    height: 350px;
    border-radius: 10px;
    -webkit-box-shadow: 4px 4px 19px -2px rgba(0,0,0,0.47);
    -moz-box-shadow: 4px 4px 19px -2px rgba(0,0,0,0.47);
    box-shadow: 4px 4px 19px -2px rgba(0,0,0,0.47);

    ${BlockItem}:hover&{
        background: #e6e6e6;
        margin-top: -10px;
    }


`
const BlockImgItem = styled.div`
    max-width: 350px;
    height: 170px;
    overflow: hidden;

    /* border: 1px solid; */
`

const GridBlock = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 15px;
    padding-top: 30px;

`

const LinkTitle = styled(Link)`
    text-decoration: none;
    margin: 10px;
    font-size: 1.2em;
    color: #333333;

`


export default ({pageContext}) => {
    const {name, slug, posts} = pageContext
    // const ShowImg = () => {
    //     return(

    //     )
    // }
    return (
     <Layout>
         <LayoutWrapper>
         <h1>{name}</h1>
         <GridBlock>
             {posts.nodes.map(catItem => (
                 <BlockItem>
                        <BlockImgItem className="expertStyle">
                            <Img src =  {catItem.featuredImage.mediaItemUrl} />
                        </BlockImgItem>
                        <LinkTitle key={catItem.id} to = {decodeURI('docs/'+slug+'/'+catItem.slug)}> <h3 className="entry-title" dangerouslySetInnerHTML= {{__html: catItem.title}}/> </LinkTitle>
                        <p className="expertStyle" dangerouslySetInnerHTML= {{__html: catItem.excerpt}} />
                 </BlockItem>
             ))}
         </GridBlock>
         </LayoutWrapper>
     </Layout>
    )
}


// export default CatTemplate;





