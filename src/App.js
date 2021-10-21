import React from 'react'
import Container from '@mui/material/Container'
import ProductList from './components/ProductList'

// Components

const App = () => {

  return (
    <section className="section">
      <Container maxWidth="md">
        <ProductList />
      </Container>
    </section>
  )
}

export default App
