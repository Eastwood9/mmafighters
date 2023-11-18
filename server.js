const http = require('http')
const express = require('express')
const app = express()

const PORT = 8000

const heavyweightUFC = {
  champion: {
    name: 'Jon Jones',
    record: {
      wins: 27,
      loses: 1,
      draw: 0,
      'no contest': 1
    },
    height: 193,
    weight: 113
  },
  1: {
    name: 'Tom Aspinall',
    record: {
      wins: 14,
      loses: 3,
      draw: 0,
      'no contest': 0
    },
    height: 196,
    weight: 118
  },
  2: {
    name: 'Ciryl Gane',
    record: {
      wins: 12,
      loses: 2,
      draw: 0,
      'no contest': 0
    },
    height: 193,
    weight: 112
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html')
})

app.get('/api', (req, res) => {
  res.json(heavyweightUFC)
})

app.listen(PORT, () => {console.log(`server is running on port ${PORT}...`)})