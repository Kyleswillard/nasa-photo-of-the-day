import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './pic.css'


const Pic = () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=iXAFwmgXZXvsjHbKRmoWwlN0PgaYiSiyE0GoN3yP&date=2020-10-${randomNumber()}`;
  const [picData, setPic] = useState("");


useEffect((e) => {

axios
.get(url)
.then(res => setPic(res.data.url))
.catch(err => console.log(err))
},[ url], () => picData === picData ? picData : setPic(randomNumber()))
  ;
// console.log(picData)
  return (
  <div className="container">
    <div className="picDiv">
    <img src={picData}  alt="Nasa Pic of the Day" />
    <button onClick={()=> setPic()}>Click for new image!</button>

    </div>
  </div>
  )
}

const randomNumber = () => {
const max = 31;
let random = Math.floor(Math.random() * max)
return random}


export default Pic;