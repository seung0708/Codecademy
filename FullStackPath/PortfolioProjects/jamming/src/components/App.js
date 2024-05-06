import React, {useState} from 'react'
import '../App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const list = [
   {
      'LE SSERAFIM': {
        songs: ['Smart', 'EASY', 'Perfect Night', 'ANTIFAGILE', 'UNFORGIVEN (feet. Nile Rodgers']
      }
   },
   {
     'aespa': {
        songs: ['Drama', 'Spicy', 'Savage', 'Next Level']
     }
   },
  
   { 
    'ITZY': {
      songs: ['UNTOUCHABLE', 'WANNABE', 'CAKE', 'BORN TO DIE']
    }
   }
]


const App = () => {
  const [currentState, setCurrentState] = useState(list)

  // const search = term => {
  //   currentState.map((item) => {

  //   })
  // }

  return (
    <div className="App">
      <h1>Jamming</h1>
      <div>
        { currentState.map(artists => {
          return <div>{artists.songs}</div>
        })}
      </div>

    </div>
  );
}

export default App;
