const API_KEY ='AIzaSyCH12nD4DDYiJ4mHS2ZjrBNfniMKDxTUhI'



export const value_contverter = (value) => {
  if(value >= 1000000)
  {
    return Math.floor(value/1000000) + "M"
  }
  else if(value >= 1000)
  {
    return Math.floor(value/1000) + "K"
  }
  else {
    return value
  }
}



export default API_KEY 