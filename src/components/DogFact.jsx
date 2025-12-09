// DogFact Component
// import {useState, useEffect} from 'react'

export const DogFact = ({ fact }) => {
  // const [facts, setFacts] = useState()
  // const body = result.data.attributes.body

  // useEffect(() => {
    console.log(fact);
  // })
  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop

  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  // return <div>{fact} dog fact here.</div>;
return <div>{fact.attributes.body} dog fact here.</div>;
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />


// [
//     {
//         "id": "20b4826f-28d8-4cf2-aa26-7f66230e498d",
//  -–––>  "type": "fact",
//  –––>   "attributes": {
//          -–––> "body": "A dog's nose is wet because it is lined with mucus, which helps to pick up scents."
//         }
//     },
// ]