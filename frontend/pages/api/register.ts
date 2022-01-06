import { NextApiRequest, NextApiResponse } from 'next'



export default function handler(req:NextApiRequest, res:NextApiResponse) {
    const {name,age,course} = req.body
    res.status(200).json({name, age, course})
  }