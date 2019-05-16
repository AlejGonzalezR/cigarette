const axios = require("axios");

const axiosClient = axios.create({});

const errorHandler = (error) => {
    let message = "";
    let status = "";
    let isError = true;

    if (error.response) {
        if (error.response.data) {
            message = error.response.data.message;

            if (!error.response.data.status || !Number.isInteger(error.response.data.status)) {
                status = error.response.status;                            
            } else if (error.response.data.status === 'error') {
                status = 404;
            } else {
                status = error.response.data.status;
            }
        } else {
            status = error.response.status;
            message = error.response.statusText;
        }
    } else if (error.config.method === 'put') {
        isError = false;
        message = "Request done";
        status = 201;
    
    } else {
        message = error.message;
        status = 404;
    }

    return {
        error: isError,
        status: status,
        message: message
    };
}

const doRequest = async (url, req, res, useAuthHeader = true) => {
    let service = null;
    const headerOptions = useAuthHeader ? { authorization : req.headers.authorization } : {};

    const requestOptions = {
        headers: headerOptions
    };
    
    const method = req.method.toUpperCase();

    switch (method) {
        case "POST":
            service = axiosClient.post(url, req.body, requestOptions);
        break;
        case "PUT":
            service = axiosClient.put(url, req.body, requestOptions);
        break;
        case "PATCH":
            service = axiosClient.patch(url, req.body, requestOptions);
        break;
        case "GET":
            service = axiosClient.get(url, requestOptions);
        break;    
        default:
            service = axiosClient.get(url, requestOptions);
        break;
    }

    service.then(response => {
        res.send(response.data);
    })
    .catch(error => {
        const errorFormatted = errorHandler(error);
        return res.status(errorFormatted.status).send(errorFormatted);
    });
}

exports.doRequest = doRequest;