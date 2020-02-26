import express from 'express';
import { MongoManager } from './services/MongoManager';
import * as bp from 'body-parser';


const app = express();
const mongo = new MongoManager();

app.use(bp.json());
app.use(clientErrorHandler);
app.use(bp.urlencoded({ extended: false }));
const port = 3000;
app.get('/', (req, res) => {
    const collection: string = 'blog_pages';
    mongo.findAll(collection, function (docs) {
        docs.forEach(element => {
            delete element['_id'];
        });
        res.json(docs).status(200);

    });
    //   res.send('The sedulous hyena ate the antelope!');

});
const server = app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

const sigs: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT']
sigs.forEach(sig => {
    process.on(sig, () => {
        // Stops the server from accepting new connections and finishes existing connections.
        console.log('Http server is shutting down !!.');
        server.close(function (err) {
            if (err) {
                console.error(err)
                process.exit(1)
            }
            mongo.close(() => {
                console.info("Successfully closed mongo connection...");
            });
        });
    })
});

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' });
    } else {
        next(err);
    }
}