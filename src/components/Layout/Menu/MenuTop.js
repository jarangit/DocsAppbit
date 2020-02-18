import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const MenuBlock = styled.div`
    overflow: hidden;
    margin: 15px 0 0 0;
    height: auto;
    background: #e4d8c6;
    position: fixed;
    top: 0;
    width: 80%;
    -webkit-box-shadow: 4px 4px 19px -2px rgba(0,0,0,0.47);
    -moz-box-shadow: 4px 4px 19px -2px rgba(0,0,0,0.47);
    box-shadow: 4px 4px 19px -2px rgba(0,0,0,0.47); 
    a {
        display: inline-block;
        text-decoration:none;
        padding:15px 15px ;
        margin: 10px 0;
        color: #549C5C;
        font-size : 20px;


    }
    border-radius: 50px;
        text-align: right;
  /* width: 100%;
    background: #e4d8c6;
    margin-right:300px;
    padding:15px 0 ;
    height:auto;
    border-radius: 50px;

    -webkit-box-shadow: 4px 4px 19px -2px rgba(0,0,0,0.47);
    -moz-box-shadow: 4px 4px 19px -2px rgba(0,0,0,0.47);
    box-shadow: 4px 4px 19px -2px rgba(0,0,0,0.47); */
`
// const LinkMenu = styled(Link)`
//     padding: 20px;
//     text-decoration: none;
//     color: #549C5C;
//     font-size : 20px;
// `
const Div = styled.div`
    height: 100px;
`
const MenuTop = () => {
    return(

        <StaticQuery query = {graphql`
         {
  wordPress {
    menu(id: "TWVudToy") {
      menuItems {
        nodes {
          label
          url
        }
      }
    }
  }
}
`} render = {props =>{
            return(
                    <Div>
                        <MenuBlock>
                        {props.wordPress.menu.menuItems.nodes.map(item=>{
                            return(
                                        <Link>{item.label} </Link>
                            )
                        })}
                    </MenuBlock>
                    </Div>
            )
        }}/>
    )
}

export default MenuTop;