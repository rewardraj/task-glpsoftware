import React from 'react'
import styled from'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f6f5f5;
  

`

const ButtonElement = styled.button`
padding: var(--padding-small) var(--padding-medium);
border: none;
border-radius: 5px;
font-size: 20px;
font-weight: 600;
max-width: fit-content;
background: var(--color-primary);
color: var(--color-white);
cursor: pointer;
margin: 0 auto;

&:hover,
&:focus
{
    background: rgba(39, 93, 182, 255);
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
}
`

const Button = () => {
  return (
    <Wrapper >
    <h1 style={{
        color: 'white',
        backgroundColor: 'black',
        padding: '10px',
        width: 'max-content',
        margin: '5rem auto',
        borderRadius: '10px',
        textAlign: 'center',
        
    }}>
      Button Element
    </h1>

    <ButtonElement>Button</ButtonElement>

    </Wrapper>
  )
}

export default Button
