import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter     from 'enzyme-adapter-react-16'
import React             from 'react'
import { Provider }      from 'react-redux'
import { MemoryRouter }  from 'react-router-dom'
import { createStore }   from 'redux'
import combineReducers   from '../../reducers'
import NavBar            from './NavBar'

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('<NavBar/> unit test', () => {
  const mockStore = createStore(combineReducers, {
    cartState: {
      numInCart: 0,
      total    : 0,
      products : []
    }
  })
  
  const getWrapper = () => mount(
    <Provider store={ mockStore }>
      <MemoryRouter initialEntries={ [ '/' ] }>
        <NavBar/>
      </MemoryRouter>
    </Provider>
  )
  
  it('should show a cart link', () => {
    const wrapper = getWrapper()
    expect(wrapper.find('a#cart-link').at(0).prop('href')).toEqual('/cart')
  })
})
