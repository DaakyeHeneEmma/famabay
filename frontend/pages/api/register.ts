import { NextApiRequest, NextApiResponse } from 'next'
const IndexedDB = require('indexeddb')
const Destructible = require('destructible')
const path = require('path')

const destructible = new Destructible('indexeddb.readme.t')

const indexedDB = IndexedDB.create(destructible, path.join(__dirname, 'tmp', 'readme'))


const request = indexedDB.open('test', 1)

request.onupgradeneeded = function () {
    const db = request.result
    const store = db.createObjectStore('president', { keyPath: [ 'lastName', 'firstName' ] })
    store.put({ firstName: 'George', lastName: 'Washington' })
    store.put({ firstName: 'John', lastName: 'Adams' })
    store.put({ firstName: 'Thomas', lastName: 'Jefferson' })
}

request.onsuccess = function () {
    const db = request.result
    const cursor = db.transaction('president')
                     .objectStore('president')
                     .openCursor()
    const gathered:any = []
    type event = "h1"
    cursor.onsuccess = function (event:event) {
        const cursor = event.target.result
        if (cursor != null) {
            gathered.push(cursor.value)
            cursor.continue()
        } else {
            okay(gathered, [{
                firstName: 'John', lastName: 'Adams'
            }, {
                firstName: 'Thomas', lastName: 'Jefferson'
            }, {
                firstName: 'George', lastName: 'Washington'
            }], 'gathered')
            db.close()
            destructible.destroy()
        }
    }
}


export default function handler(req:NextApiRequest, res:NextApiResponse) {
    const {name,age,course} = req.body
    res.status(200).json({name, age, course})
  }