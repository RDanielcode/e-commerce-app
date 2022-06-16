import React from 'react'
import Product from '../../components/Product'
import ProductMock from '../../__mocks__/ProductMock'
import { mount, shallow } from 'enzyme'

describe('<Product />', ()=> {
  test('component render', ()=>{
    const product = shallow(<Product product={ProductMock}/>)
    expect(product.length).toEqual(1)
  })

  test('testing button', ()=>{
    const handleAddToCart = jest.fn()
    const wrapper = mount(
      <Product 
        product={ProductMock}
        handleAddToCart={handleAddToCart}
      />
    )
    wrapper.find('button').simulate('click')
    expect(handleAddToCart).toHaveBeenCalledTimes(1)
  })
})