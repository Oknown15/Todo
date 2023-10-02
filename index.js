const password = "011235813";

alert("hint: Password Is The Fibonacci Series <= 13")

function passwordCheck() {
    if(document.getElementById('#passId').value != password) {
        console.log("Wrong password");
        alert("Wrong password");
        document.getElementById("#txtmain").innerText = "This is an incorrect  password! Try again.";
        document.getElementById("#inputP").style.display = "none"
    }
    else if(document.getElementById('#passId').value == password) {
        console.log('correct password');
        alert("you are logged in");
       const newPage = document.getElementById("password").classList;
       newPage.add("myPage");
       const newPage2 = document.getElementById("body").classList;
       newPage2.add("body");
       document.getElementById("#head").innerText = "what are we doing today?"
       const OnnewPage = document.getElementById("#class").classList;
       OnnewPage.add("OnewPage");
        document.getElementById("#header").style.display = "inline-block";
    }

}

function onPagebtn() {
     const thisPage = document.getElementById("pageCheckbox").classList;
     thisPage.add("Oncheck");
     document.getElementById("radio").style.display = "flex";
}


function check() {
//create element li to sotre input
var li = document.createElement("li");
//the if inputBox is saved as the variable inputVal 
  const inputVal = document.getElementById("inputBox").value;
  const text = document.createTextNode(inputVal);
  li.appendChild(text);
  if (inputVal === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list-container").appendChild(li);

  }
  document.getElementById("inputBox").value = "";
  document.getElementById("radio").style.display = "none";

  let radio = document.getElementById("radiofull");
  radio.checked = false;

}
