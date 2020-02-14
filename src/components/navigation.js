import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import styled from 'styled-components'

const Div = styled.div`
  max-width: 2500px;
  margin: 30px 0;
  padding: 15px;
  display: flex;
  /* border: 1px solid #8f8f8f;
  border-radius: 20px; */
`
const DivItem = styled.div`
line-height:10px;
  border-left: 1px solid;
  padding: 0 15px;
`
const LinkItem = styled(Link)`
  text-decoration:none;
  color: #8f8f8f;

  ${LinkItem}:hover&{
    color:#1B2B45;
  }

`
const DivActive = styled.div`
  color:#e0857b;
  font-weight: bold;
`



const Navigation = (props) =>{
  console.log(props.data)
  return(
    <Div> 
      <DivItem>
        <LinkItem to = 'home'> home </LinkItem>
      </DivItem>
      <DivItem>
        {props.data.categories.nodes.map(catItem=>{
          return(
            <LinkItem to = {decodeURI('docs/' + catItem.slug)}> {catItem.slug} </LinkItem>
          )
        })}
      </DivItem>
      <DivItem>
          <DivActive> {props.data.title}  </DivActive>
      </DivItem>
    </Div>
  )
}
export default Navigation