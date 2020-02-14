import React,{Component} from 'react';
import styled from 'styled-components';


const FooterCopy = styled.div`
    width: 100%;
    text-align: center;
    /* background-color: #57534d; */
    color: #FF5555;
    clear: both;
    padding: 15px 30px;
    font-weight: 200;
    font-size: 14px;
    position: fixed;
`
const Link = styled.a`
    text-decoration: none;
    color: #FF5555;
`

class Footer extends Component {

    render(){
        return( 
                <FooterCopy className="content1">
                    <div>
                        Copyright By <Link href ="#">App-Bit Studio - Digital Marketing Agency Privacy Polic</Link>
                    </div>
                </FooterCopy>
        )
    }
}

export default Footer;
