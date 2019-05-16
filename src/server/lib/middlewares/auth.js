/**
 * 
 * @param {*} req Request 
 * @param {*} res Response
 * @param {*} next Continue execution
 */
const auth = (req, res, next) => {
    const tokenPattern = /^Bearer\s(\S+)$/;
    const authHeader = req.headers.authorization;
        
    if (!authHeader) {        
        return res.status(403).json({
            status: 403,
            message: "FORBIDDEN ACCESS"
        });
    }

    if (!tokenPattern.test(authHeader)) {
        return res.status(403).json({
            status: 403,
            message: "FORBIDDEN ACCESS. TOKEN HEADER BAD FORMED"
        });        
    }
    
    next();
}

module.exports = auth;