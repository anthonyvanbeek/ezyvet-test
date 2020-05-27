import { AppBar, Badge, Button, Toolbar, Typography } from '@material-ui/core'
import ShoppingCartIcon                               from '@material-ui/icons/ShoppingCart'
import React                                          from 'react'
import { useSelector }                                from 'react-redux'
import { Link }                                       from 'react-router-dom'
import styled                                         from 'styled-components'
import { RootState }                                  from '../../store'

const Title = styled(Typography)`
  flex-grow: 1;
`

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

export const NavBar = () => {
  const cartState = useSelector((state: RootState) => state.cartState)
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Title variant="h6">
          <TitleLink to="/">EzyVet Test App</TitleLink>
        </Title>
        <Button component={ Link } to="/" color="inherit">Home</Button>
        <Button id="cart-link" component={ Link } to="/cart" color="inherit">Cart
          <Badge badgeContent={ cartState.numInCart } color="secondary"><ShoppingCartIcon/></Badge>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
