import {useEffect,useState} from 'react'

import axios from 'axios';
import './App.css';
import Card from './Components/Cards';
function App() {
  const [ Characters , setCharacters]=useState([]);

  useEffect(() =>{
    console.log("inside useEffects");
    getAllcharacters();
   
  
  },[])
  const getAllcharacters = () =>{
   axios.get("https://www.breakingbadapi.com/api/characters")
    .then((res) => setCharacters(res.data))
    .catch((err) => console.log(err))                                                                                         
    
  }
  console.log("character",Characters) 

 

  return (
   
    <div className="App" style={{ display: "flex", flexWrap: "wrap" }} >
      {Characters.map((item) => (
        <div>

          <Card  img={item.img} name={item.name} birthday={item.birthday}  />
      </div>
      ))}
    </div>
  );
}

export default App;
