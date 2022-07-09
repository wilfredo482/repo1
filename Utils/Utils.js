const axios = require("axios");
const instance = axios.create({
    baseURL:"https://resplendent-choux-fc57b5.netlify.app"
})


module.exports = instance;