const { MongoClient } = require('mongodb');

const URL = 'mongodb+srv://myAtlasDBUser:myatlas-001@myatlasclusteredu.dr1tn.mongodb.net';

const client = new MongoClient(URL);

const dbConnect = async () => {
    try {
        await client.connect();
        console.log("Connected sucessfully!!")
    }
    catch(e) {
        console.log("error:", e)
    }
}

dbConnect();