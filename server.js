const http = require('http')
const express = require('express')
const { NONAME } = require('dns')
const app = express()

const PORT = 8000

const mmaFightersDB = {
  'jon jones': {
    record: {
      wins: 27,
      loses: 1,
      'no contest': 1
    },
    nickname: 'bones'
  },
  'sergei pavlovich': {
    record: {
      wins: 18,
      loses: 2,
    }
  },
  'daniel cormier': {
    record: {
      wins: 27,
      loses: 1,
      draws: 1,
      'no contest': 1
    },
    nickname: 'dc'
  },
  'unknown': {
    record: 'none',
    nickname: 'unknown'
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html')
})

app.get('/api/:name', (req, res) => {
  const fighter = req.params.name.toLowerCase()

  if (mmaFightersDB[fighter]) {
    res.json(mmaFightersDB[fighter])
  } else {
    res.json(mmaFightersDB['unknown'])
  }

})

app.listen(process.env.PORT || PORT, () => {console.log(`server is running on port ${PORT}...`)})