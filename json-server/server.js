// See https://github.com/typicode/json-server#module
import { create, router as _router, defaults, rewriter } from 'json-server'

const server = create()

// Comment out to allow write operations
const router = _router('db.json')

const middlewares = defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(rewriter({
    '/api/*': '/$1',
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
export default server