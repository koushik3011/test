import React, { useEffect, useState } from "react";
import Axios from "axios";

const App =()=>{
  const[dataa,setdata]=useState([])
  const getdata = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/add");
      console.log(response.data);
      setdata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(()=>{
    getdata()
  },[])
  return <div>
    <form className="boddy" action="http://localhost:5000/add" method="post">
        <input type="text" className="inp" placeholder="num1" name="a" />
        <input className="inp" type="text" placeholder="num1" name="b" />
        <button className="buttn" type="submit"> add</button>
    </form>
     <div className="boddy">
      answer is {dataa}
     </div>
    </div>
}
export default App