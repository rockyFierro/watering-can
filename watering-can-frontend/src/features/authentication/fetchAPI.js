
export const fetchAPI = () => {

  const baseUrl = `https://water-my-plants-node.herokuapp.com`;
  const getRequest = new Request(
    baseUrl,
    {
      method: 'GET',
      mode: 'cors'
    }
  )

  const postRequest = new Request(
    //TODO: add token auth to post, push to sessionStorage
    baseUrl,
    {
      method: 'POST',
      mode: 'cors'
    }
  )
  fetch(getRequest)
    .then(
      response => response.json()
    )
    .then(
      data => console.log(data)
    )
    .catch(
      error => console.log(error)
    )
}