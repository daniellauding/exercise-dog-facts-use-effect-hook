import { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [dogFact, setDogFact] = useState([]);
  const [visible, setVisible] = useState(true);

  // Hint: Define the API endpoint
  const LIMIT = `?limit=5`
  const API = `https://dogapi.dog/api/v2/facts${LIMIT}`;
  
  // Hint: Create a function to fetch the dog fact
  const fetchDogFact = async () => {
    const response = await fetch(API)
    const result = await response.json();
    console.log('pure:', response)
    console.log('response:', result)
    setDogFact(result.data);
  } 

  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts
  useEffect(() => {
    fetchDogFact()
  }, []);

  const handleClick = () => {
    setVisible(prev => !prev)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>{visible ? 'Hide' : 'Show'} facts</button>

      {visible && dogFact.map((fact) => (
        // <DogFact key={fact.id} fact={fact.attributes.body} />
        <DogFact key={fact.id} fact={fact} />
      ))}
      
    </div>
  );
};