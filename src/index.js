const fs = require('fs').promises
const getTheme = require('./theme')

const blackPinkRoseTheme = getTheme({
  theme: 'rose',
  name: 'Black Pink Rose',
})

fs.mkdir('./themes', { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile(
        './themes/black-pink-rose.json',
        JSON.stringify(blackPinkRoseTheme, null, 2)
      ),
    ])
  )
  .catch(() => process.exit(1))
