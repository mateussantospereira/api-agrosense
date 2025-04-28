const response = (res, status, message, data) => {
    res.status(status).json({
        status: status,
        message: message,
        data: data
    });
}

module.exports = response;
