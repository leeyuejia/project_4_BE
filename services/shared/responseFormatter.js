const HTTP_RESPONSE_STATUS_CODE = require('../config/statusCodes');

const buildJSONResponse = (req, isSuccess, payload) => {
    const msg = isSuccess === true ?
        `Successfully ${req.method} data at path ${req.originalUrl}` :
        `Failed to ${req.method} data at path ${req.originalUrl}`
    return {
        success: isSuccess,
        method: req.method,
        path: req.originalUrl,
        message: msg,
        data: payload
    }
}

module.exports = {

    responseOK(req, res, payload) {
        res.status(
                HTTP_RESPONSE_STATUS_CODE.OK)
            .json(buildJSONResponse(req, true, payload))
    },

    responseErr(req, res, payload) {
        res.status(
                HTTP_RESPONSE_STATUS_CODE.NOTFOUND)
            .json(buildJSONResponse(req, false, payload))
    },
    responseOKWithErr (req, res, payload) {
        console.log('payload',payload)
        res.status(
                HTTP_RESPONSE_STATUS_CODE.OK)
            .json(buildJSONResponse(req, false, payload))
    }
}