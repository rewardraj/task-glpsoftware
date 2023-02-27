import styled from "styled-components";

export const CardSection = styled.div`
    background: #6c757d;
    padding-bottom: var(--gutter);
`

export const CardWrapper = styled.div`
display: flex;
gap: 40px;
justify-content: center;
align-items: center;
padding: 0 var(--whitespace);
flex-wrap: wrap;

`
export const Cards = styled.div`
     height: 450px;
  width: 350px;
  background: #ffffff;
  gap: 40px;
  box-shadow: 0px 12px 14px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
`
export const CardImage = styled.div`
    background: #cccccc;
    height: 32%;
    width: 100%;
`
export const CardP = styled.p`
    font-size: 40px;
    font-weight: 300;
    color: #ababab;
    padding-top: 15%;
    text-align: center;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 18px 8px;
    line-height: 1.5;
`

export const CardButton = styled.button`
    background: #3679e1;
    color: #ffffff;
    padding: 8px 8px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
&:hover, 
    &:focus {
        background: #28a745;
    {

`