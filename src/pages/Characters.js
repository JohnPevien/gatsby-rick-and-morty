import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CharacterCard from '../components/CharacterCard'
import { fetchCharacters } from '../api/rickandmorty'

import Grid from '@material-ui/core/Grid'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters()
      .then(response => {
        setCharacters(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const renderCard = () => {
    return characters.map(character => {
      return (
        <Grid container item md={4} sm={12} key={character.id}>
          <CharacterCard imgUrl={character.image} name={character.name} />
        </Grid>
      )
    })
  }
  return (
    <Layout>
      <SEO title="Characters" />
      <h1>Characters</h1>
      <div style={{flexGrow: 1}}>
      <Grid container spacing={7}>{renderCard()}</Grid>
      </div>
      
    </Layout>
  )
}

export default Characters
