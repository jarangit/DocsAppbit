import React from 'react'
import {graphql, StaticQuery, Link} from  'gatsby'
import styled from 'styled-components'

const Display = styled.div`
    /* background: red; */
    display: flex;
    flex-wrap: wrap;
    /* grid-template-columns: auto auto auto auto auto; */
`
const DisplayItem = styled.div`
    width: 150px;
    height: 100px;
    color:white;
    margin: 5px;
    padding: 25px;
    border-radius: 20px;
    transition: margin 0.3s;
    transition: box-shadow 0.2s;
    ${DisplayItem}:hover&{
        margin-top: -1px;
        background:red; 
        box-shadow: 4px 4px 19px -2px rgba(0,0,0,0.47);
    }
`

const LinkCard = styled(Link)`
    text-decoration:none;
`

const TagItem = () => {
    return(
        <StaticQuery query = {graphql`
            {
                                wordPress{
                            tags {
                            nodes {
                            name
                            slug
                            tagId
                        }
                    }
                }
            }
        `} render = {props => {
            var Sty = "linear-gradient(to right, #e43a15, #e65245)"; 
            return(
               <div>
                   <h1>Document-WP</h1>
                    <Display>
                    {props.wordPress.tags.nodes.map(item=>{
                        const ChangColor = () => {
                            if(item.slug === "lyf"){
                                Sty = "linear-gradient(to right, #f56991, #fbb5ff)";          
                           }else if(item.slug === "afr"){
                            Sty = "linear-gradient(to right, #6C9D91, #98f0d8)"; 
                           }else if(item.slug === "fnf"){
                            Sty = "linear-gradient(to right, #e43a15, #ffa391)"; 
                           }else if(item.slug === "wnw"){
                            Sty = "linear-gradient(to right, #3d3d3d, #787878)"; 
                           }else if(item.slug === "wre"){
                            Sty = "linear-gradient(to right, #9262af, #d79cff)"; 
                           }else if(item.slug === "wst"){
                            Sty = "linear-gradient(to right, #3f749e, #33cfff)"; 
                           }else if(item.slug === "lew"){
                            Sty = "linear-gradient(to right, #C8B586, #ffd57a)"; 
                           }
                       }
                        return(
                            <LinkCard to = {decodeURI('tags/'+item.slug)}>
                            <div> {ChangColor()} </div>
                                <DisplayItem style = {{background: Sty}}>
                                    <h3> {item.slug.toUpperCase()} </h3>
                                    <div> {item.name} </div>
                                </DisplayItem>
                            </LinkCard>
                        )
                    })}
                </Display>
               </div>
            )
        }}
        />
    )
}

export default TagItem