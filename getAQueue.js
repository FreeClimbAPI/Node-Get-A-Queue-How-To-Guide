require('dotenv').config()
const freeclimbSDK = require('@freeclimb/sdk')
const accountId = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
const freeclimb = freeclimbSDK(accountId, authToken)

// Retreive a queue by queueId
freeclimb.api.queues.get(queueId).then(queue => {
  // Use the queue object
}).catch(err => {/** Catch Errors */ })
