import React, { useState, useEffect } from 'react'
import '../styles/App.css';

const Loader = () => <div id="loader">Loading...</div>
const makeURL = (type) => `http://www.boredapi.com/api/activity?type=${type}`


const App = () => {
  const [loading, setLoading] = useState(false);
  const [typeValue, setTypeValue] = useState("education");
  const [fatchValue, setFatchvalue] = useState("");
  const [count, setCount] = useState(0);

  const callUrl = () => {

    setLoading(true);
    fetch(makeURL(typeValue))
      .then((result) => result.json())
      .then((json) => {
        console.log(count);
        console.log(json);
        setFatchvalue(json.activity);
        setLoading(false);
      })
  }

  useEffect(callUrl, [typeValue, count]);
  return (
    <div id="main">
      <div id="activity">

        {loading ? <Loader /> : <div>{fatchValue}</div>}


        <button id="btn-recreation" onClick={() => { setTypeValue("recreational"); setCount(count + 1) }} >recreational</button>
        <button id="btn-education" onClick={() => { setTypeValue("education"); setCount(count - 1) }}>education</button>
      </div>
    </div>
  )
}


export default App;
