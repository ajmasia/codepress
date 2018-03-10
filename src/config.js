module.exports = {
    serviceURL: process.env.SERVICE_URL || 'http://localhost:',
    servicePORT: process.env.SERVICE_PORT || 3001,
    commentsCollection: process.env.COLLECTION_NAME || 'comments/'
}