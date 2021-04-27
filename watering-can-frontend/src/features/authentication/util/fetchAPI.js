import axios from 'axios';

export const fetchAPI = (endpoint) => {
  const baseUrl = `https://water-my-plants-node.herokuapp.com${endpoint}`;
  axios.post(baseUrl, {
    username: "rocky",
    password: "password",
    phone_number: "(999)-999-9999"
  })
    .then(
      res => console.log(res)
    )
    .catch(
      error => console.log(error)
    )
}
