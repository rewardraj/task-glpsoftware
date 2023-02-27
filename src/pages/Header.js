import React from 'react';
import styled from 'styled-components';
import code from '../assets/images/code.jpg'

const Wrapper = styled.div`
  padding: var(--whitespace) 0;
  display: flex;
  flex-direction: column;
  gap: var(--gutter);
`;

const HeaderWrapper = styled.div`
  background-color: #008000;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const SectionWrapper = styled.div`
  padding: var(--whitespace);
  gap: var(--whitespace);
  display: flex;
  flex-direction: column;
`;

const SectionOne = styled.div`
  background-color: #ffc0cb;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const SectionInner = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SectionTwo = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const SectionTwoLeft = styled(SectionTwo)`
  background-color: #0000ff;
  flex-basis: 40%;
`;

const SectionTwoRight = styled(SectionTwo)`
  background-color: #ffff00;
  flex-basis: 60%;
  width: 70%;
`;

const ImageWrapper = styled.div`
  position: relative;
  bottom: 30px;
  
`

const Image = styled.img`
  width: 100%;
  max-height: 300px;
  display: block;
  object-fit: cover;
`

const Footer = styled(SectionTwo)`
  background-color: #0000ff;
  background: #a52a2a;

`;


const Header = () => {
  return (
    <Wrapper>
      <HeaderWrapper>Header</HeaderWrapper>

      <SectionWrapper>
        <SectionOne>Section 1</SectionOne>
        <SectionInner>
          <SectionTwoLeft>Section 2 Left</SectionTwoLeft>
          <SectionTwoRight>Section 2 Right</SectionTwoRight>
        </SectionInner>
      </SectionWrapper>
      <ImageWrapper>
        <Image src={code} />
        <Footer>Footer</Footer>
      </ImageWrapper>
    </Wrapper>
  );
};

export default Header;
