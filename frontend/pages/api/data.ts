
import { NextApiRequest, NextApiResponse } from 'next'
import data from './content'

//recievig all user data from the backend
export default async function handler(req:NextApiRequest, res:NextApiResponse){

    try {
      const data = await fetch('http://127.0.0.1:4000/api/alldata') ?? console.log('no data found')
      const json = await data.json()
      const result = await json 
      res.send(result);
      // res.send(content);
      console.log(result);

      // return result;
    } catch (error) {
      res.send({message : "Could not fetch data from the server"})
      console.log({message : "Could not fetch data from the server"});
      
    }
}


