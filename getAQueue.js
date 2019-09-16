const persephonySDK = require('@persephony/sdk')
const accountId = process.env.accountId
const authToken = process.env.authToken
const persephony = persephonySDK(accountId, authToken)

// Retreive a queue by queueId
persephony.api.queues.get(queueId).then(queue => {
  // Use the queue object
}).catch(err => {/** Catch Errors */ })
