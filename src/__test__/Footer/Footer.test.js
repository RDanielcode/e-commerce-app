import React from 'react'
import Footer from '../../components/Footer'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'

describe('<Footer />', ()=> {
  const footer = mount(<Footer />)
  test('Footer render', () => {
    expect(footer.length).toEqual(1)
  })
  test('footer title', ()=>{
    expect(footer.find('.Footer-title').text()).toEqual('Store')
  })
})

describe('Footer snapshot', ()=>{
  test('testing ui', ()=>{
    const footer = create(<Footer />)
    expect(footer.toJSON()).toMatchSnapshot()
  })
})