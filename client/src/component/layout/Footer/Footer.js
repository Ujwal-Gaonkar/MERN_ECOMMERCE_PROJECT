import { EmailOutlined, GitHub, Instagram, LinkedIn, MyLocation, Phone, Twitter, YouTube } from "@material-ui/icons"
import { Link } from "react-router-dom"
import styled from "styled-components"
import LinkR from '@material-ui/core/Link';
import {css} from "styled-components"
const mobile=(props)=>{
    return css`
   @media screen and (max-width: 600px)    {
        ${props}
    }
    `;
};
const Container=styled.div`
    display:flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo=styled.h1`

`

const Desc = styled.p`
    margin:20px 0px;

`
const SocialContainer = styled.div`
    display:flex;
`

const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({ display: "none" })}
`
const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`
const Title=styled.h3`
    margin-bottom:30px;

`
const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
`
const ListItem=styled.li`
    width:50%;
    margin-bottom:10px;
    display:flex;
`

const ContactItem=styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`
const Payment=styled.img`
    width:50%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>JUSTBuy</Logo>
            <Desc>Connect With Us....</Desc>
            <SocialContainer>
                <LinkR href="https://www.linkedin.com/in/ujwal-gaonkar-6746aa1a7/" target="_blank" >
                    <LinkedIn />
                </LinkR>
                    
                <LinkR href="https://twitter.com/UjwalGaonkar2" target="_blank">
                    <Twitter />
                </LinkR>
                <LinkR href="https://github.com/Ujwal-Gaonkar" target="_blank"  border-radius='50%'>
                    <GitHub color='#6cc644'/>
                </LinkR>
                <LinkR href="https://www.youtube.com/channel/UCNaPKF1SRjTs94UpeYJa6Fw" target="_blank">
                    <YouTube/>
                </LinkR>

                <LinkR href="https://www.instagram.com/ujwal_gaonkar_07_/" target="_blank">
                    <Instagram />
                </LinkR>

            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                  <Link to ="/cart">
                  <ListItem>Cart</ListItem>
                  </Link>
                  <Link to ="/">
                  <ListItem>Home</ListItem>
                  </Link>
                  <Link to ="/about">
                  <ListItem>About</ListItem>
                  </Link>
            </List>
            <Title>Copyrights 2022 &copy; JUSTBuy.india.co</Title>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem >
                <MyLocation style={{marginRight:"10px"}}/>
                Mirjan, Karnataka 581333
            </ContactItem>
            <ContactItem>
                <Phone style={{ marginRight: "10px" }}/>
                +919686584485
            </ContactItem>
            <ContactItem>
                <EmailOutlined style={{ marginRight: "10px" }}/>
                justbuy.india.co@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer