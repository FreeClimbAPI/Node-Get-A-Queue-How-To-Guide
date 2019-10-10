require('dotenv').config()
const persephonySDK = require('@persephony/sdk')
const accountId = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
const persephony = persephonySDK(accountId, authToken)

// Retreive a queue by queueId
persephony.api.queues.get(queueId).then(queue => {
  // Use the queue object
}).catch(err => {/** Catch Errors */ })
