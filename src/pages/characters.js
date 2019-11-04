import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { fetchCharacters } from '../api/rickandmorty'

import CharacterCard from '../components/CharacterCard'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchCharacters()
      .then(response => {
        setCharacters(response.data.results)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const renderCard = () => {
    return characters.map(character => {
      return (
        <Grid container item md={4} key={character.id}>
          <CharacterCard data={character} />
        </Grid>
      )
    })
  }

  const renderContent = () => {
    if (isLoading) { 
      return (
        <>
          <Typography variant="h2" paragraph color="primary">
            Characters
            <CircularProgress color="primary" thickness={4} />
          </Typography>
          
        </>
      )
    }
      

    return (
      <>
        <Typography variant="h2" paragraph color="primary">
          Characters
        </Typography>
        <div style={{ flexGrow: 1 }}>
          <Grid container spacing={7}>
            {renderCard()}
          </Grid>
        </div>
      </>
    )
  }

  return (
    <Layout>
      <SEO title="Characters" />
      {renderContent()}
    </Layout>
  )
}

export default Characters
