import mongoClient from 'mongodb'

export async function connect() {
    try {
        const client = await mongoClient.connect('mongodb://localhost:27017', {useNewUrlParser:true});
        const db = client.db('node-es10');
        console.log('DB is connected!')
        return db;
    } catch (error) {
        console.log(error);
    }
}