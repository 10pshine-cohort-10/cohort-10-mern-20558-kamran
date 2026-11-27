
import 'dotenv/config'
import app from './app.js'

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

server.on('error', (error) => {
  console.error('Failed to start server:', error)
  process.exit(1)
})
