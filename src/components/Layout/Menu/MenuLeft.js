import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const Sidebar = styled.div`
        height: 100%;
        background: #FF5555;
        color:white;
`

const LinkMenu = styled(Link)`
    padding:  5px 0;
    display: block;
    color:white;
    text-decoration: none;
    :hover{
        transition: 0.5s;
        background: white;
        color:#1B2B45;
        border-radius: 20px;    
    }
`
const LinkAppbit = styled(Link)`
    color:white;
    text-decoration: none;
`
const BlockHeader = styled.div`
    text-align: center;
    margin: 100px 0;
`

const Block = styled.div`
    margin:0 10px 0 40px;

`

const Li = styled.li`
    list-style:none;
`

const Ul = styled.ul`
    list-style-type: none;
    margin:0;
`
const H4 =styled.h4`
    margin-left:10px;
`

const MenuLeft = () => {
    return(
        <StaticQuery query = {graphql`
             {
                wordPress {
    menu(id: "TWVudToz") {
      menuItems {
        nodes {
          label
          url
          id
          childItems {
            nodes {
              url
              label
              id
            }
          }
        }
      }
    }
  }
}
`} render = {props =>{
    const ShowMenu = () => {
        return(
           <div className="sidebar">
               <BlockHeader>
                            <LinkAppbit to= 'home'>
                                <h1> APPBIT </h1>
                                <h4> Document </h4>
                            </LinkAppbit>
                </BlockHeader>
                {props.wordPress.menu.menuItems.nodes.map(item=>{
                     const wpUrl = `http://docs.dev-app-bit.com/`
                     const onlyPath = decodeURI(  item.url.replace(wpUrl,``))
                return(
                    <Block>            
                            <LinkMenu to={`/${onlyPath}/`} > <label for="trigger" > <H4> {item.label} </H4>  </label> </LinkMenu>
                            {item.childItems.nodes.map(child=>{
                                const wpUrl = `http://docs.dev-app-bit.com/category/`
                                const onlyPath = decodeURI( child.url.replace(wpUrl,``))
                                return(
                                    <LinkMenu to={`docs/${onlyPath}/`}>
                                    <Ul>
                                        <Li> {child.label} </Li>
                                    </Ul>
                                    </LinkMenu>
                                )
                            }                             
                            )}
                    </Block>
                )
            })}
           </div>
        )
    }

    
            return(                  
                    <div>
                        {ShowMenu()}
                    </div>
            )
        }}/>
    )
}

export default MenuLeft;
