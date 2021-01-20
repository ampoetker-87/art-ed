import React from "react";
import "./styles.css";
import Card from "./components/Card";
import cards from "./cards";


function createCard(cards) {
  return (
    <Card
      key={cards.id}
      title={cards.title}
      name={cards.name}
      img={cards.img}
      details={cards.details}
      source={cards.source}
    />
  );
}


function shuffleArray(array) { 
  for (var i = array.length - 1; i > 0; i--) { 

      // Generate random number  
      var j = Math.floor(Math.random() * (i + 1)); 

      var temp = array[i]; 
      array[i] = array[j]; 
      array[j] = temp; 
  } 

  return array; 
}

function Firstcards() {
  shuffleArray(cards)
  return (
  cards.map(createCard)
  )
}


function Shuffle() {
  function handleClick() {
    window.location.reload();
    } 

  return (
    <button className="btn-2g" onClick={handleClick}>
      Shuffle Cards
    </button>
  );
}



function App() {
  return (
  <div className="centered-wrapper">
  <div className="centered-content">
  <Firstcards />
  <div>  <Shuffle />
</div>
</div>
  </div>)
}

export default App;

