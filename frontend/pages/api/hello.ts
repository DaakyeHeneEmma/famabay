
import { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(req:NextApiRequest, res:NextApiResponse){
  
  const data = await fetch('http://127.0.0.1:5000/api/alldata')
  const json = await data.json()
  const result = await json
   console.log(result)
  res.send(result)
}

 
