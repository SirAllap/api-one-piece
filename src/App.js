import React, { useState, useEffect } from 'react'
import './app.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from './features/characters/charactersThunks'
import { fetchStatus, initialFetchOfCharacters } from './features/characters/charactersSlice'


function App() {
  const dispatch = useDispatch()

  const fetchOfCharacters = useSelector(initialFetchOfCharacters)
  const status = useSelector(fetchStatus)

  const [characters, setCharacters] = useState([])

  const fetchData = () => {
    dispatch(fetchCharacters())

  }

  useEffect(() => {
    status === 'fulfilled' && setCharacters(fetchOfCharacters)
  }, [status, fetchOfCharacters])


  return (
    <>
      <button onClick={fetchData}>Fetch characters</button>
      <div className='grid'>
        {characters.map((ele, i) =>
          <div key={i} className='grid-card'>
            <div className='grid-card-left-info'>
              <span>Name: {ele.french_name}</span>
              <span>Job: {ele.job}</span>
              <span>Size: {ele.size}</span>
            </div>
            <div className='grid-card-right-info'>
              <span>Bounty: {ele.bounty}</span>
              <span>Age: {ele.age}</span>
              <span>Status: {ele.status}</span>
            </div>
          </div>
        )}
      </div >
    </>
  )
}

export default App
