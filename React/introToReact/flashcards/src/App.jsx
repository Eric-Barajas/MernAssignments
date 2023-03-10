import flashcardsData from './data/flashcards.json';
import './App.css';
import { useState } from 'react';
import NewFlashcard from './components/NewFlashcard';
import AllFlashcards from './components/AllFlashcards';

const App = () => {
  const [flashcards, setFlashcards] = useState(flashcardsData)

  const handleFlip = (event, selectedCardIdx) => {
    console.log("Flipped")
    const updatedCards = flashcards.map((card, i) => {
      if (i === selectedCardIdx) {
        return {
          ...card,
          flipped: !card.flipped
        }
      }
      return card;
    })
    setFlashcards(updatedCards);
  }

  const handleDelete = (event, cardIndexToDelete) => {
    event.stopPropagation();
    flashcards.splice(cardIndexToDelete, 1);
    setFlashcards([...flashcards])
  }

  const addNewCard = (newCard) => {
    setFlashcards([newCard, ...flashcards])
  }

  return (
    <div className="container">
      <header style={{ textAlign: 'center' }}>
        <h1>Programming Flash Cards</h1>
        <hr />
      </header>

      <NewFlashcard addNewCard={addNewCard} />
      <AllFlashcards flashcards={flashcards} handleFlip={handleFlip} handleDelete={handleDelete} />
    </div>
  );
}

export default App;