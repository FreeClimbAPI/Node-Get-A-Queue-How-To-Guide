require("dotenv").config();
const freeclimbSDK = require("@freeclimb/sdk");

const accountId = process.env.ACCOUNT_ID;
const apiKey = process.env.API_KEY;
const queueId = "your-queue-id";

const freeClimbConfig = freeclimbSDK.createConfiguration({
  accountId,
  apiKey,
});
const apiInstance = new freeclimbSDK.DefaultApi(freeClimbConfig);

// Retreive a queue by queueId
apiInstance
  .getAQueue(queueId)
  .then((queue) => {
    // Use the queue object
  })
  .catch((err) => {
    /** Catch Errors */
  });
