import React from 'react'
import { graphql } from 'gatsby'
import {Button as ButtonLink}  from 'gatsby-theme-material-ui'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import CharacterCard from '../components/CharacterCard'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Characters = ({pageContext, data }) => {
  const { rickandmorty: { characters: { results: charactersData } } } = data;
 
  const renderCard = () => {
    return charactersData.map(character => {
      return (
        <Grid container item md={4} key={character.id} justify="center">
          <CharacterCard data={character} />
        </Grid>
      )
    })
  }

  const renderNavButtons = () => {
    const previousPage = pageContext.page - 1;
    const nextPage = pageContext.page + 1;

    return (
      <Box display="flex"
        justifyContent="center"
        alignItems="center"
        mt={4}
        mb={4}
      >
        <ButtonGroup color="primary" size="large">
          <ButtonLink to={`/characters/${previousPage}`}>Previous</ButtonLink>
          <ButtonLink disabled>Page {pageContext.page} of {pageContext.totalPage}</ButtonLink>
          <ButtonLink to={`/characters/${nextPage}`}>Next</ButtonLink>
        </ButtonGroup>
      </Box>
    )
  }

  const renderContent = () => {
    return (
      <>
        <Box
          display="flex"
          mb="1rem"
          alignItems="center"
          justifyContent="space-between"
          maxWidth="21rem"
        >
          <Typography variant="h2" color="primary">
            Characters
          </Typography>
        </Box>
        <Grid container spacing={7}>
          {renderCard()}
        </Grid>
        {renderNavButtons()}
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
export const pageQuery = graphql`
  query($page: Int!) {
    rickandmorty {
      characters(page: $page) {
        results {
          id
          name
          status
          species
          gender
          image
          origin {
            name
          }
        }
      }
    }
  }
`