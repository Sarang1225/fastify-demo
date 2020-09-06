// Import the fastify framework
const fastify = require('fastify')
const app = fastify()
// Set a GET route "/"
app.get('/g', function (request, reply) {
    reply.redirect(302,'https://www.google.com/')
})
// Start the server
app.listen(80, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
})