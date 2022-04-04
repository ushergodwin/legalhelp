const nodemailer = require('nodemailer')
const catchAsyncError = require('../middlewares/catchAsyncError')

const send = catchAsyncError(async(req, res, next) => {

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // generated ethereal user
            pass: process.env.EMAIL_PASSWORD, // generated ethereal password
        }
    })

    const {
        send_to,
        subject,
        body,
        name,
        phone,
        email
    } = req.body

    const message = "Dear Sir/Madam, my name is " + name + "<br/>" + body +
        "<br/> <br/> Yours faithfully,<br/>" + name + "<br/>" + phone + "<br/><br/> <h5>This email was sent from the LegalHelpOnline website. <br/>Response to: Email: " + email + "<br> Call: " + phone + "</h5> <p>Thank you</p><p>Kind regards, <br/>LegalHelpOnline Team</p>"

    transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    const info = await transporter.sendMail({
        from: '"LEGAL HELP ONLINE" <' + process.env.EMAIL_USER + '>', // sender address
        to: send_to, // list of receivers
        subject: subject, // Subject line
        html: message // html body
    });

    if (info.response.toLowerCase().indexOf("ok") > 1) {
        //console.log(info.response)
        return res.status(200).json({ success: true })
    }
    return res.status(202).json({ success: false, error: info.response })
})

module.exports = send