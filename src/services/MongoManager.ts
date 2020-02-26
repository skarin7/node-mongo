import { MongoClient } from 'mongodb';
import config from 'config';
export class MongoManager {
    client: MongoClient;

    constructor() {
        const url: string = config.get('mongo_url');
        var self = this;
        this.client = new MongoClient(url, {
            auth: {
                user: config.get('mongo_userName'),
                password: config.get('mongo_password')
            },
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        this.client.connect(function (err, client) {
            if (err) {
                console.error('Error connecting to Database');
            }

            self.client = client;
            console.log("Successfuly connected to mongo db..");
        });

    }

    public findAll(collectioName: string, callback: any) {
        const db: string = config.get('mongo_db');
         this.client.db(db).collection(collectioName).find({}).toArray(function (err, docs) {
            if (err) {
                console.error("Error fetching dcos", err);
                return;
            }
            callback(docs);
        });
    }

    private getConnection() {
        return this.client;
    }

    /**
     * 
     */
    public close(callback?: any) {
        if (this.client) {
            try {
                this.client.close();
                callback();
            } catch (error) {
                console.error(" Error closing mongo connection..", error);
            }
        }
    }


}