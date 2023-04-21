function calculateAge() {
  // Get input values
  var day = parseInt(document.getElementById("dd").value);
  var month = parseInt(document.getElementById("mm").value);
  var year = parseInt(document.getElementById("yyyy").value);

  // dash is used to give it a class "ans" and "--" if the else if condition is met, a way to make it responsive for the correct answer.
  function dash() {
    var dashyear = document.getElementById("yearr");
    dashyear.className = "ans";
    dashyear.innerHTML = "--" + "<span class='age'>years</span>";

    var dashmonth = document.getElementById("monthh");
    dashmonth.className = "ans";
    dashmonth.innerHTML = "--" + "<span class='age'>months</span>";
    
    var dashday = document.getElementById("dayy");
    dashday.className = "ans";
    dashday.innerHTML = "--" + "<span class='age'>days</span>";
  };

  // Check if input values are valid
  if (isNaN(year)) {
    document.getElementsByClassName("d")[2].className = "d dreq";
    document.getElementsByClassName("textreq")[2].innerHTML = "This field is required";
  } else if (year > new Date().getFullYear()) {   // year is greater than the current year
    document.getElementsByClassName("d")[2].className = "d dreq";
    document.getElementsByClassName("textreq")[2].innerHTML = "Must be in the past";
    dash();
    return;   // the return in all the else if statements makes the code stop running if the else if condition is met
  } else {
    document.getElementsByClassName("d")[2].className = "d";
    document.getElementsByClassName("textreq")[2].innerHTML = "";
  }
  if (isNaN(month)) {
    document.getElementsByClassName("d")[1].className = "d dreq";
    document.getElementsByClassName("textreq")[1].innerHTML = "This field is required"; 
  } else if (month < 1 || month > 12 || month > new Date().getMonth()+1 && year === new Date().getFullYear()) {     
         // month is less than 1 or greater than 12 or month is greater than current month if the current year is selected
    document.getElementsByClassName("d")[1].className = "d dreq";
    document.getElementsByClassName("textreq")[1].innerHTML = "Must be a valid month"; 
    dash();
    return;
  } else {
        document.getElementsByClassName("d")[1].className = "d";
        document.getElementsByClassName("textreq")[1].innerHTML = "";
      }
  if (isNaN(day)) {
    document.getElementsByClassName("d")[0].className = "d dreq";
    document.getElementsByClassName("textreq")[0].innerHTML = "This field is required";
  } else if (day < 1 || day > 31 || day > new Date().getDate() && ( month > new Date().getMonth() && year === new Date().getFullYear()) ) {
    // day is less than 1 or day is greater than 31 or day is greater than the current day if the current year is selected
    document.getElementsByClassName("d")[0].className = "d dreq";
    document.getElementsByClassName("textreq")[0].innerHTML = "Must be a valid day";
    dash();
    return;
  } else if ((day == 29 || day == 30) && month == 2) {
    // day is less than 1 or day is greater than 31 or day is greater than the current day if the current year is selected
    document.getElementsByClassName("d")[0].className = "d dreq";
    document.getElementsByClassName("textreq")[0].innerHTML = "Must be a valid day";
    dash();
    return;
  } else if (day == 31 && (month == 2 || month == 4 || month == 6 || month == 9 || month == 11)) {
    // day is less than 1 or day is greater than 31 or day is greater than the current day if the current year is selected
    document.getElementsByClassName("d")[0].className = "d dreq";
    document.getElementsByClassName("textreq")[0].innerHTML = "Must be a valid day";
    dash();
    return;
  }else {
    document.getElementsByClassName("d")[0].className = "d";
    document.getElementsByClassName("textreq")[0].innerHTML = "";
  }
   
 
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return; 
  }

  // Get current date
  var currentDate = new Date();

  // Get birth date
  var birthDate = new Date(year, month - 1, day);

  // Calculate age
  var ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
  var age = new Date(ageInMilliseconds);
  var years = age.getFullYear() - 1970;
  var months = age.getMonth() + 1;
  var days = age.getDate() - 1;
  

  // Display age
  var ansyear = document.getElementById("yearr");
  ansyear.className = "answer";
  ansyear.innerHTML = years +"<span class='age'> years</span>";

  var ansmonth = document.getElementById("monthh");
  ansmonth.className = "answer";
  ansmonth.innerHTML = months+ "<span class='age'> months</span>";

  var ansday = document.getElementById("dayy");
  ansday.className = "answer";
  ansday.innerHTML = days+ "<span class='age'> days</span>";

}

// Attach click event listener to age button
document.getElementById("age-btn").addEventListener("click", function(event) {
    event.preventDefault(); // prevent default form submission behavior
    calculateAge();  // call your age function
    
});
