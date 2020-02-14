
import React from "react"
import "./layout.css"
import MenuLeft from "./Menu/MenuLeft"
import MenuTop from "./Menu/MenuTop"
import Footer from "./Footer"
import styled from "styled-components"

const Column = styled.div`
  display: grid;
  grid-template-columns: 350px auto ;
  height:100%;
`
const Clhild = styled.div`
  float: left;
`

const Layout = ({ children }) => {
  return(
  <div>
      <Column>
        <div>
          <MenuLeft/>
        </div>
        <div>
          <MenuTop/>
          <Clhild className="content">
            {children}
          </Clhild>
        </div>
      </Column>
      <Footer/>
  </div>
  )
}

export default Layout
