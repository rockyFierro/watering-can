
export const fetchAPI = () => {

  const baseUrl = "https://water-my-plants-node.herokuapp.com/";
  const request = new Request(
    baseUrl,
    {
      method: 'GET',
      mode: 'cors'
    }
  )

  fetch(request)
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