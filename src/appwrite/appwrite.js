import { Client, Databases, Query } from 'appwrite';
import conf from '../conf/conf.js';


const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('667ff0e8003e5c31919a'); // Your project ID

const databases = new Databases(client);

export { client, databases, Query };
