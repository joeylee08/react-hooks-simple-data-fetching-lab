import React, {useState, useEffect} from 'react';

function App() {
  const fetchUrl = "https://dog.ceo/api/breeds/image/random"
  const [dog, setDog] = useState(null)

  useEffect(() => {
    fetch(fetchUrl)
      .then(res => res.json())
      .then(dogData => setDog(dogData.message))
  }, [])

  if (!dog) return <h3>Loading...</h3>

  const dogElem = <img src={dog} alt="A Random Dog" />
  
  return dogElem
}

export default App;