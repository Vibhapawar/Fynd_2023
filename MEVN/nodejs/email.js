var nodemailer =require('nodemailer');

var transporter = nodemailer.createTransport({
    services: 'gmail',
    auth:{
        user: 'vapawar1708@gmail.com',
        pass: 'abcdef'
    }
});

var mailOptions ={
    from: 'vapawar1708@gmail.com',
    to: 'myfreind@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error,info) {
    if (error){
        console.log(error);
    } else{
        console.log('Email sent:' +info.response);
    }
    
});