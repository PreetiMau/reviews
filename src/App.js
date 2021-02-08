import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // const [res, setRes]= useState('');
  //  //var resUser = async () => await axios.get(`https://cors-anywhere.herokuapp.com/https://www.google.com/maps/preview/place?gl=in&q=Indore+Junction%2C+Chhoti+Gwaltoli%2C+Indore%2C+Madhya+Pradesh+452007&pb=!1m10!1s0x3962fd1175bed6b5%3A0x2c1d732ce5412d!3m8!1m3!1d10312.503448509377!2d75.8595389!3d22.7171392!3m2!1i966!2i538!4f13.1!12m4!2m3!1i320!2i120!4i8!13m40!3m1!2i9!6m3!1m2!1i360!2i256!7m32!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e3!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e3!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!9b0!14m6!7e140!9s1n78X9OxA9iX4-EPxaW_wAM!15i26172!17s1n78X9OxA9iX4-EPxaW_wAM%3A154916880403!24m1!2e1!15m10!2b1!4b1!5m2!5b1!6b1!17b1!20m2!1e3!1e1!89b1!37i538`)
  // var resUser = async () => await axios.get(`https://cors-anywhere.herokuapp.com/https://www.google.com/maps/preview/place?authuser=0&hl=en&gl=in&pb=!1m13!1s0x0%3A0x9fdc02186add07df!3m8!1m3!1d15074.792372766944!2d72.8502867!3d19.1646883!3m2!1i1024!2i768!4f13.1!4m2!3d19.1646883!4d72.8502867!12m4!2m3!1i360!2i120!4i8!13m65!2m2!1i203!2i100!3m2!2i10!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m50!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e3!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e3!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!14m3!1ssAITYIraOIab4-EPxfK16AY!7e81!15i10112!15m65!1m16!13m7!2b1!3b1!4b1!6i1!8b1!9b1!20b0!18m7!3b1!4b1!5b1!6b1!9b1!13b0!14b0!2b1!4b1!5m5!2b1!3b1!5b1!6b1!7b1!10m1!8e3!14m1!3b1!17b1!20m8!1e3!1e6!1e14!1e15!1e3!1e6!1e14!1e15!24b1!25b1!26b1!29b1!30m1!2b1!36b1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m9!3m8!1m3!1m2!1i224!2i298!1m3!1m2!1i224!2i298!89b1!21m28!1m6!1m2!1i0!2i0!2m2!1i458!2i768!1m6!1m2!1i974!2i0!2m2!1i1024!2i768!1m6!1m2!1i0!2i0!2m2!1i1024!2i20!1m6!1m2!1i0!2i748!2m2!1i1024!2i768!22m1!1e81!29m0!30m1!3b1!37i540&q=Sai%20Veg%20World`)
  //   // var resUser = async () => await axios.get(`https://cors-anywhere.herokuapp.com/https://www.google.com/maps/preview/place?gl=in&q=New+Perfect+Industries%2C+B-7%2C+Ladiwala+Estate%2C+Baban+Mishra+Compound%2C+Sonawala+Cross+Road%2C+No-2%2C+Near+Good+Earth+Foundry%2C+Goregaon+East%2C+Goregaon+East%2C+Mumbai%2C+Maharashtra+400063&pb=!1m10!1s0x3be7b7b955555555%3A0xd911bc1f573e447b!3m8!1m3!1d10560.47010891151!2d72.8524333!3d19.1605666!3m2!1i966!2i538!4f13.1!12m4!2m3!1i320!2i120!4i8!13m40!3m1!2i9!6m3!1m2!1i360!2i256!7m32!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e3!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e3!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!9b0!14m6!7e140!9s_ygUYPb5NaWhmgeEp4LYAw!15i26172!17s_ygUYPb5NaWhmgeEp4LYAw%3A71816183827!24m1!2e1!15m10!2b1!4b1!5m2!5b1!6b1!17b1!20m2!1e3!1e1!89b1!37i0`)

  
  // .then((respond)=>{
  //  let strData = JSON.parse( respond.data.substring(respond.data.indexOf('[')) );
  //  let filteredData = strData[6][52][0];
  //   console.log(filteredData);
  //   setRes(filteredData);
  // }).catch(function (error) {
  //     if (error) {
  //        console.log(error);
  //     }
  // });
  // useEffect(() => {
  //   resUser();
  // }, []);

  return (
    <div className="Api">
      <h1>hello Api </h1>
      <form subject='A Message From Personal Website' netlify="true" name="contact1" id='contact-form' method="post" data-netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <p style='display: none;'>
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
  <p class='form-row'>
    <label>Your Name: </label><input type='text' name='name' required/>
  </p>
  <p class='form-row'>
    <label>Email Address: </label><input type='email' name='email' required/>
  </p>
  <p class='form-row'>
    <label>A Favorite Work of Art: </label><input type='text' name='art'/>
  </p>
  <p class='form-row'>
    <label>Your Message: </label><textarea id='message' name='message' required></textarea>
  </p>
  <p id='button-row'>
    <button id='submit-button' type='submit'>Contact Me!</button>
  </p>
</form>







      {/* {res===''? null:  (
        <>
        <input type="button" onClick={()=>resUser()}></input>
        <pre>Reviewer Link             :    {res[0][0][0]}</pre>
        <pre>Reviewer Name             :    {res[2][0][1]}</pre>
        <pre>Revie Age                 :    {res[0][1]}</pre>
        <pre>Revie Text                :    {res[0][3]}</pre>
        <pre>Reviewer Reviews Count    :    {res[0][12][1][1]}</pre>
        <pre>Review Rating             :    {res[0][4]}</pre>
      </>
      )
     } */}
    </div>
  );
}

export default App;
