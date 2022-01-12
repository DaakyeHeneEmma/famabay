
import { NextApiRequest, NextApiResponse } from 'next'


//recievig all user data from the backend
export default async function handler(req:NextApiRequest, res:NextApiResponse){
  
  const data = await fetch('http://127.0.0.1:5000/api/alldata') ?? console.log('node data found')
  const json = await data.json()
  const result = await json 
   console.log(result)
  res.send(result)
}

 
