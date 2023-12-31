export default async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
   
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
   
    // Guard clause checks for Charachter Address and Token ID,
    // and returns early if they are not found
    if (!body.search_query) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Please enter a search query' })
    }
  
    // Sending the REST Call to localhost:5000/api/v1/get_asset/<Charachter Address>/<Token ID>
    // Sending the request as a GET request
      const response = await fetch(`http://localhost:5000/api/v1/search/${body.search_query}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      })
      // The response is a list of Json objects
        const data = await response.json()


    // Found the name.
    // Sends a HTTP success code
        return res.status(200).json({ data: data })
    }
