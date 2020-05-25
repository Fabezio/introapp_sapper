let nodemailer = require("nodemailer")
const cron = require('node-cron')
let constants = require("./constant")

const transporter = nodemailer.createTransport({
  host: ''
})