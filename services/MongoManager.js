const mongoose = require('mongoose');
class Mongomanager {
// Set up mongoose connection
    constructor() {
        let dev_db_url = "mongodb://qa-cmsmongo01.aws.phenom.local:27017/cms_preprod_qa1";
        mongoose.connect(dev_db_url,
            {
                user: 'cms_preprod_qa1', pass: 'jn^nH987KLJj',
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