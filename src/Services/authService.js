const BACKEND_URL = 'http://localhost:3000'

const signup = async (formData) => {
  try {
    const resn= await fetch(`${BACKEND_URL}/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    })
    const json = await resn.json()
    if(json.err) {
      throw new Error(json.err)
    }

  }catch(err) {
    console.log(err)
    throw  err
  }
}

export {
  signup,
}