import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("module-47");

export const auth = betterAuth({
      emailAndPassword: { 
    enabled: true, 
  },
   socialProviders: {
        google: { 
            clientId: process.env.Client_ID, 
            clientSecret: process.env.Client_Secret, 
        }, 
         github: { 
            clientId: process.env.GITHUB_CLIENT_ID, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET, 
        }, 
    },  
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});