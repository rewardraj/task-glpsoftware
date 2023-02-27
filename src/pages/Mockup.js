import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/images/cruiseboat.jpg';
import Cards from '../components/Cards/Cards';
import Form from '../components/Forms/Form';
import HoverCard from '../components/HoverCards/HoverCard';


const HeroWrapper = styled.section`
    background: #ffff00; //fallback background image
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    height: 75vh;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: var(--macro) var(--whitespace);
    text-align: left;
    flex-wrap: nowrap;
    color: #ffffff;

    @media (width <= 768px) {
        justify-content: center;
        align-items: center;
        display: flex;
        padding: var(--whitespace) var(--whitespace);
    }
`

const TextH3 = styled.h3`
    font-weight: 600;
    font-size: 80px;
    word-wrap: break-word;

    @media (width <= 768px) {
        font-size: 60px;
    }
`
const TextP = styled.p`
    font-size: 18px;
    padding: var(--gutter) 0;
`

const Button = styled.button`
    background: #28a745;
    color: #ffffff;
    padding: 12px 28px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    border: none;

    &:hover {
        background: #3679e1;
    }
`

const TextH1 = styled(TextH3)`
    font-weight: 600;

    @media (width <= 768px) {
        font-size: 60px;
    }

`

const Mockup = () => {
    return (
        <>
            <HeroWrapper src="true">
                <TextWrapper>
                    <div>
                        <TextH3>New subheader</TextH3>
                        <TextH1>New header</TextH1>
                        <TextP>Lorem ipsum dolor sit amet.</TextP>
                        <Button>Connect</Button>
                    </div>
                </TextWrapper>
            </HeroWrapper>

            {/* cards */}
            <Cards />
            

            {/****** Form section start ********/}

            <div className="form__Heading" style={{
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  margin: 'var(--gutter)'
            }}>
                <h3>FORM</h3>
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', padding: 'var(--gutter) var(--gutter)'}}><Form /></div>

            
            <div style={{
                
    
            }}><HoverCard /></div>
            
            
            
        </>
    )
}

export default Mockup
