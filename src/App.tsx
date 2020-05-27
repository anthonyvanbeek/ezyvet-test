import { Container }                    from '@material-ui/core'
import NoSsr                            from '@material-ui/core/NoSsr'
import { createMuiTheme }               from '@material-ui/core/styles'
import React, { useEffect }             from 'react'
import { useDispatch }                  from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider }                from 'styled-components'
import { fetchProducts }                from './actions/fetchProducts'
import NavBar                           from './components/organisms/NavBar'
import Cart                             from './components/pages/Cart'
import Home                             from './components/pages/Home'
import { products }                     from './mocks/products'

const theme = createMuiTheme({})

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    // Simulated Async
    const aSyncFetch = () => async (dispatch: any) => {
      setTimeout(() => {
        dispatch(fetchProducts(products))
      }, 1000)
    }
    
    dispatch(aSyncFetch())
  }, [ dispatch ])
  
  return (
    <NoSsr>
      <ThemeProvider theme={ theme }>
        <BrowserRouter>
          <NavBar/>
          <Container maxWidth="md">
            <Switch>
              <Route path="/" exact component={ Home }/>
              <Route path="/cart" component={ Cart }/>
            </Switch>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </NoSsr>
  )
}

export default App
