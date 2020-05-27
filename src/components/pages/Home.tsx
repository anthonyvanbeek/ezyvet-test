import { Grid, List, ListItem, ListItemText } from '@material-ui/core'
import Button                                 from '@material-ui/core/Button'
import React                                  from 'react'
import { useDispatch, useSelector }           from 'react-redux'
import styled                                 from 'styled-components'
import { addToCart }                          from '../../actions/addToCart'
import { RootState }                          from '../../store'
import Product                                from '../../types/Product'

export const Row = styled(List)`
  border-bottom: 0.0625rem solid #eee;
  display: flex;
`

export const ListItemEnd = styled(ListItem)`
  justify-content: flex-end;
`

const Home = () => {
  const fetchedProducts = useSelector((state: RootState) => state.cartState.products)
  const dispatch        = useDispatch()
  
  return (
    <Grid>
      {
        fetchedProducts.map((product: Product) => {
          return (
            <Row key={ product.id }>
              <ListItem><ListItemText><strong>{ product.name }</strong></ListItemText></ListItem>
              <ListItem><ListItemText>${ product.price.toFixed(2) }</ListItemText></ListItem>
              <ListItem component={ ListItemEnd }>
                <Button variant="outlined" color="primary" onClick={ () => dispatch(addToCart(product.id)) }>Add to cart</Button>
              </ListItem>
            </Row>
          )
        })
      }
    </Grid>
  )
}

export default Home
