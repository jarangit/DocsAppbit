import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import Navigation from '../components/navigation'



export default ({pageContext}) => {
    return (
     <div>
        <Layout>
            <Navigation data={pageContext}/>
            <h2 dangerouslySetInnerHTML= {{__html: pageContext.title}} />
            <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
        </Layout>
     </div>
    )
}








