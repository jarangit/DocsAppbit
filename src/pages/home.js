import React from 'react'
import {graphql, StaticQuery, Link} from  'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import TagItem from '../components/Home/TagItem'

const Home = () => {
    return(
        <Layout>
            <TagItem/>
        </Layout>
    )
}

export default Home