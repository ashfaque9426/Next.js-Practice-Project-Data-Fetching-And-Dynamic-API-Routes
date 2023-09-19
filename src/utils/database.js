
const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
});

export async function connectToDatabase() {
    try {
        await client.connect();
        return client.db('UserDataCluster');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}