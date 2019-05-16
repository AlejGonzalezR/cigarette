const { bookApiAuthUrl } = require("../../config");
const axiosClient = require("../util/serviceClient");
let router = require("express").Router();

router.post("/login", (req, res) => axiosClient.doRequest(`${bookApiAuthUrl}authenticate`, req, res));
router.post("/register", (req, res) => axiosClient.doRequest(`${bookApiAuthUrl}usuarios/post`, req, res, false));
router.post("/reset-pass", (req, res) => axiosClient.doRequest(`${bookApiAuthUrl}reset-password`, req, res,false));
router.post("/validar-reset", (req, res) => axiosClient.doRequest(`${bookApiAuthUrl}validate-reset-password-token`, req, res,false));
router.post("/confirm-pass", (req, res) => axiosClient.doRequest(`${bookApiAuthUrl}confirm-change-password`, req, res,false));

module.exports = router;