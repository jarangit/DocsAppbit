import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import { Link } from 'gatsby'


//Style
const Img = styled.img`
    width:100%;
 `

const BlockItem = styled.div`
    padding:15px;
    margin: 20px 20px 0 0;

    max-width: 300px;
    height: 350px;
    border-radius: 10px;
    -webkit-box-shadow: 4px 4px 19px -2px rgba(0,0,0,0.47);
    -moz-box-shadow: 4px 4px 19px -2px rgba(0,0,0,0.47);
    box-shadow: 4px 4px 19px -2px rgba(0,0,0,0.47);
    overflow: hidden;


    ${BlockItem}:hover&{
        background: #e6e6e6;
        ; */
    }


`
const BlockImgItem = styled.div`
    max-width: 350px;
    height: 170px;
    overflow: hidden;
    /* border: 1px solid; */
`

const GridBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
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
    const {name, posts} = pageContext
    // const ShowImg = () => {
    //     return(

    //     )
    // }
    return (
     <Layout>
         {/* <LayoutWrapper> */}
         <h1>{name}</h1>
         <GridBlock>
             {posts.nodes.map(postItem => (
                 <BlockItem>
                        <BlockImgItem>
                            <Img src =  {postItem.featuredImage.mediaItemUrl} />
                        </BlockImgItem>
                        {postItem.categories.nodes.map(postCatItem=>(
                        <LinkTitle key={postItem.id} to = {decodeURI('docs/'+postCatItem.slug+'/'+postItem.slug)}> <h3 className="entry-title" dangerouslySetInnerHTML= {{__html: postItem.title}}/> </LinkTitle>
                            ))}
                        <p className="expertStyle" dangerouslySetInnerHTML= {{__html: postItem.excerpt}} />
                 </BlockItem>
             ))}
         </GridBlock>
         {/* </LayoutWrapper> */}
     </Layout>
    )
}


// export default CatTemplate;





