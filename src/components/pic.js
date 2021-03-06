import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import './pic.css'


const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const PicDiv = styled.div`
  padding: .75rem;
  width: 80%;
  min-height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const PicButton = styled.button `
border: ${props => props.wheatBorder};
  padding: 1.5rem;
  color: ${props => props.primaryColor};
  background-color: ${props => props.secondaryColor};
  font-weight: bolder;
  font-size: 15px;
  margin: 1.5rem;

  &:hover {
  border: ${props => props.blackBorder};
  background-color: ${props => props.primaryColor};
  color: ${props => props.secondaryColor};
  }
`

const PicImg = styled.img `
border: ${props => props.wheatBorder};
  box-shadow: 8px 8px 8px 8px #000;
`


const Pic = () => {

  const [picData, setPic] = useState("");
  const [count, setCount] = useState(0)




useEffect((e) => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=iXAFwmgXZXvsjHbKRmoWwlN0PgaYiSiyE0GoN3yP&date=2020-10-1${count}`;

axios
.get(url)
.then(res => setPic(res.data.url))
.catch(err => console.log(err))
setPic()


},[count], () => count)
  ;


// console.log(picData)
  return (
  <ContainerDiv >
    <PicDiv>
    <PicImg src={picData}  alt="Nasa Pic of the Day" />
    <PicButton onClick={()=> setCount(count === 10 ? count - 10  : count + 1)}>Click for new image!</PicButton>

    </PicDiv>
  </ContainerDiv>
  )
}






export default Pic;