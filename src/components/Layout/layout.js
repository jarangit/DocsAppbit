
import React from "react"
import "./layout.css"
import MenuLeft from "./Menu/MenuLeft"
import MenuTop from "./Menu/MenuTop"
import Footer from "./Footer"
import styled from "styled-components"

const Column = styled.div`
  display: grid;
  grid-template-columns: 350px 80%;
  height:100%;
`
// const Clhild = styled.div`
//   /* text-align: left; */
//   /* border: 1px solid red; */
//   /* background: white; */
//   /* height: 100%; */
// `

const Layout = ({ children }) => {
  return(
  <div>
      <Column>
        <div>
          <MenuLeft/>
        </div>
        <div>
          <MenuTop/>
          <div >
            {children}
          </div>
        </div>
      </Column>
      <Footer/>
  </div>
  )
}

export default Layout
