const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('contact-form')[0];

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Clicked");
    let ebody = `
    <b>Name: </b> ${name.value}
    <br/>
    <b>Email: </b> ${email.value}
    <br/>
    <b>Message: </b> ${message.value}
    <br/>
    `
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pfaltsioni@gmail.com",
        Password : "5984CE2A565D55544F27065C64A44DAA36C3",
        To : 'pfaltsioni@gmail.com',
        From : 'pfaltsioni@gmail.com',
        Subject : "New message",
        Body : ebody
    }).then(
        message => alert(message)
        );

})