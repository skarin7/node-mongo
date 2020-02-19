const mongoose = require('mongoose');
const config = require('config');
class Mongomanager {
// Set up mongoose connection
    constructor() {
        let dev_db_url = config.get('mongo_url');
        mongoose.connect(dev_db_url,
            {
                user: config.get('mongo_userName'), pass: config.get('mongo_password'),
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err, db) => {
                if (err) {
                    console.error("Error connecting to db", err);
                }
                console.info(" Connected to the database ");
                this.db = db;
            });

    }
    
}

module.exports = new Mongomanager();