import { ListItem, ListItemText }   from '@material-ui/core'
import Button                       from '@material-ui/core/Button'
import React                        from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled                       from 'styled-components'
import { removeFromCart }           from '../../actions/removeFromCart'
import { RootState }                from '../../store'
import Product                      from '../../types/Product'
import { ListItemEnd, Row }         from './Home'

const LargeText = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
`

const Cart = () => {
  const dispatch  = useDispatch()
  const products  = useSelector((state: RootState) => state.cartState.products)
  const total     = useSelector((state: RootState) => state.cartState.total)
  const numInCart = useSelector((state: RootState) => state.cartState.numInCart)
  
  return (
    <div>
      { numInCart > 0 ?
        products.map((product: Product) => {
          if (product.inCart) {
            return (
              <Row key={ product.id }>
                <ListItem><ListItemText><strong>{ product.name }</strong></ListItemText></ListItem>
                <ListItem><ListItemText>${ product.price.toFixed(2) }</ListItemText></ListItem>
                <ListItem><ListItemText>Quantity: { product.quantity }</ListItemText></ListItem>
                <ListItem><ListItemText>${ product.total.toFixed(2) }</ListItemText></ListItem>
                <ListItem component={ ListItemEnd }>
                  <Button variant="outlined" color="primary" onClick={ () => dispatch(removeFromCart(product.id)) }>Remove</Button>
                </ListItem>
              </Row>
            )
          }
        
          return null
        })
                      : <LargeText>There are no products in the cart.</LargeText>
      }
      { numInCart > 0 && <LargeText>Total: ${ total.toFixed(2) }</LargeText> }
    </div>
  )
}

export default Cart
