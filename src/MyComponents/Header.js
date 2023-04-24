import React, { useEffect } from "react";
import { ReactDOM } from "react";
import './header.css';


const Header = () =>{
    const getCovidData= async()=>{

      try{

        const res= await fetch("https://data.covid19india.org/data.json");
        const actualData=await res.json();

        // console.log(actualData.statewise[0]); 

        // const recovered=document.querySelector('#recovered');
        // recovered.innerHTML=actualData.statewise[0].recovered;
        
        // const confirmed=document.querySelector('#confirmed');
        // confirmed.innerHTML=actualData.statewise[0].confirmed;

        // const deaths=document.querySelector('#death');
        // deaths.innerHTML=actualData.statewise[0].deaths;

        // const active=document.querySelector('#active');
        // active.innerHTML=actualData.statewise[0].active;

        
        // const timeUpdated=document.querySelector('#timeUpdated');
        // timeUpdated.innerHTML=actualData.statewise[0].lastupdatedtime

        ReactDOM.render(<>{actualData.statewise[0].recovered}</>,document.querySelector('#recovered'));
        ReactDOM.render(<>{actualData.statewise[0].confirmed}</>,document.querySelector('#confirmed'));
        ReactDOM.render(<>{actualData.statewise[0].deaths}</>,document.querySelector('#death'));
        ReactDOM.render(<>{actualData.statewise[0].active}</>,document.querySelector('#active'));
        ReactDOM.render(<>{actualData.statewise[0].lastupdatedtime}</>,document.querySelector('#timeUpdated'));
        
      }
      catch(err){
        console.log(err);
      }
    }


  useEffect(()=> {
    getCovidData();
  },[]);

  return (
    <>
    <section>
      <div className="main">

        <h1 id="heading">LIVE COVID TRACKER</h1>
        <marquee id="attract"  direction="right" >🔴LIVE </marquee>
        <ul>
        
          <li>
            <div className="cards" id="card_1">
                <div className="card_main">
                  <p>OUR </p>
                  <span>COUNTRY</span>
                  <h1>INDIA</h1>
                </div>
            </div>
          </li>
          
          <li>
            <div className="cards" id="card_2">
                <div className="card_main">
                  <p>TOTAL </p>
                  <span>RECOVERED</span>                    
                  <h1 class="data" id="recovered"></h1>
                </div>
            </div>
          </li>
          
          <li>
            <div className="cards" id="card_3">
                <div className="card_main">
                  <p>TOTAL </p>
                    <span>CONFIRMED</span>
                  <h1 class="data" id="confirmed"></h1>
                </div>
            </div>
          </li>

          <li>
            <div className="cards" id="card_4">
                <div className="card_main">
                  <p>TOTAL </p>
                  <span>DEATH</span>
                  <h1 class="data" id="death"></h1>
                </div>
            </div>
          </li>

          <li>
            <div className="cards" id="card_5">
                <div className="card_main">
                  <p>TOTAL </p>
                  <span>ACTIVE</span>
                  <h1 class="data" id="active"></h1>
                </div>
            </div>
          </li>

          <li>
            <div className="cards" id="card_6">
                <div className="card_main">
                  <p>LAST </p>
                  <span>UPDATED</span>
                  <h1 class="data" id="timeUpdated"></h1>
                </div>
            </div>
          </li>
          
        </ul>

      </div>
     
    </section>
    </>
  )
}

export default Header