import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "nodejs7777@outlook.com",
        pass: "abc123456789"
    },
    tls: {
        rejectUnauthorized: false
    }
});


export const options = {
    from: "nodejs7777@outlook.com",
    to: "nodejs506070@gmail.com",
    subject: "User created",
    text: "A new user has been created"
};


