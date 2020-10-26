//Assignment 2
//Student: amish tangri 30110446
//Course: Web Application Development SEC.001  COMP229004-2020F
//Date: October 24, 2020 -->




//Iifee -- Immediately Invoked Function Expression
(function(){

function start(){
    console.log("Your app has started successfully...")
    
    let deleteButtons = document.querySelectorAll('.btn-danger')

    for(button of deleteButtons)
    {
        button.addEventListener('click',(event)=>{
            if(!confirm("Are you sure?"))
            {
              event.preventDefault();
              window.location.assign('/contact-list');
            }
        })
    }
}

window.addEventListener("load", start);

if(document.title == "Contact Me")
{
    console.log("on contact page")
    let sendButton = document.getElementById("sendButton");
    let cancelButton = document.getElementById("resetButton");

    sendButton.addEventListener("click", (event) => {
       event.preventDefault();

       let firstName = document.getElementById("fname").value;
       let lastName = document.getElementById("lname").value;
       let number = document.getElementById("tel").value;
       let email = document.getElementById("email").value;
       let message = document.getElementById("message").value;
       let form = document.forms[0];

       console.log("First Name: " + firstName);
       console.log("Last Name: " + lastName);
       console.log("Contact Number: " + number);
       console.log("Email: " + email);
       console.log("Message: " + message );
       console.log("");

       if(firstName =="" || lastName=="" || email=="" )
       {
           confirm("Please fill the form...")
       }
       else
       {
        if(confirm("Your submission was successfull..."))
        {
           location.href = "/home";
        }
       }

       form.reset();
       
      
    })

    cancelButton.addEventListener("click", (event) => {
       event.preventDefault();
        if(confirm("Are you sure?"))
        {
           location.href = "/home";
        }
    })
}

})();

