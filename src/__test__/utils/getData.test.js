import getData from "../../utils/getData"

describe('fetch API', ()=>{
  beforeEach(()=>{
    fetch.resetMocks()
  })

  test('call api', ()=>{
    fetch.mockResponseOnce(JSON.stringify({ data : '123' }))

    getData('https://google.com')
      .then(response => {
        expect(response.data).toEqual('123')
      })

      expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
  })
})