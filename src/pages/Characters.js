import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CharacterCard from '../components/characterCard'
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
        <Grid item md={3}>
          <CharacterCard imgUrl={character.image} name={character.name} />
        </Grid>
      )
    })
  }
    return (
        <Layout>
        <SEO title="Characters" />
      <h1>Characters</h1>
      <Grid container spacing={7}>
        {renderCard()}
      </Grid>
      
    </Layout>
    )
}

export default Characters
