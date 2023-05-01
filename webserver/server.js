require('dotenv').config()
const express = require("express");
const app = express();
const path = require('path')
const http = require('http')

function angularRouter(req, res) {
    res.sendFile(path.join(__dirname, 'dist/browser/index.html'))
}

app.set('views', path.join(__dirname, 'dist/browser'))
app.set('view engine', 'html')

const port = process.env.PORT || 4200;
app.set('port', (port))
if (process.env.PROXY == '1')
    app.set('trust proxy', 1)

app.use(process.env.SUB_PATH || '/', express.static(path.join(__dirname, 'dist/browser')))

app.use((err, req, res, next) => {
    if (err) { // error handlers
        console.log('error', err)
        if (err.status === 404) {
            // catch 404 and send back to index.html
            // (technically this should never run since all will be caught above)
            res.sendFile(path.join(__dirname, 'dist/browser/index.html'))
        } else {
            // send json error
            res.json({
                success: false,
                message: 'Something wrong try agian later.'
            })
        }
    }
});

app.get('*', angularRouter)

const env = process.env.NODE_ENV;
if (env === 'development') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0' // uncheck https cert
}

async function main() {
    var server = http.createServer(app)
    server.setTimeout(10 * 60 * 1000) // 10 min
    server.listen(app.get('port'), () => {
        console.log('listening on port ' + app.get('port'))
    })
}

main().catch(console.error);
