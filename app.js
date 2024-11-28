var usersData = [
  {
    name: "Junaid",
    rollNo: 123456,
    grade: 12,
    chemistry: 85,
    physics: 70,
    math: 95,
    english: 80,
    urdu: 73,
    pst: 45,
    status: "pass",
    password: "junaid1234",
    gmail: "junaid@gmail.com",
  },
  {
    name: "Ali",
    rollNo: 123457,
    grade: 12,
    chemistry: 90,
    physics: 75,
    math: 88,
    english: 85,
    urdu: 78,
    pst: 50,
    status: "pass",
    password: "ali20233",
    gmail: "ali@gmail.com",
  },
  {
    name: "Sara",
    rollNo: 123458,
    grade: 12,
    chemistry: 80,
    physics: 65,
    math: 92,
    english: 76,
    urdu: 70,
    pst: 42,
    status: "pass",
    password: "sara1234",
    gmail: "sara@example.com",
  },
  {
    name: "Kashan",
    rollNo: 123459,
    grade: 12,
    chemistry: 88,
    physics: 72,
    math: 90,
    english: 82,
    urdu: 75,
    pst: 48,
    status: "pass",
    password: "kashan2023",
    gmail: "kashan@gmail.com",
  },
  {
    name: "Nadia",
    rollNo: 123460,
    grade: 12,
    chemistry: 78,
    physics: 68,
    math: 85,
    english: 79,
    urdu: 72,
    pst: 44,
    status: "fail",
    password: "nadia1234",
    gmail: "nadia@example.com",
  },
  {
    name: "Zain",
    rollNo: 123461,
    grade: 12,
    chemistry: 92,
    physics: 80,
    math: 94,
    english: 90,
    urdu: 80,
    pst: 53,
    status: "pass",
    password: "zain2023",
    gmail: "zain@example.com",
  },
  {
    name: "Hina",
    rollNo: 123462,
    grade: 12,
    chemistry: 83,
    physics: 74,
    math: 89,
    english: 78,
    urdu: 71,
    pst: 47,
    status: "pass",
    password: "hina1234",
    gmail: "hina@example.com",
  },
  {
    name: "Sajid",
    rollNo: 123463,
    grade: 12,
    chemistry: 76,
    physics: 70,
    math: 88,
    english: 82,
    urdu: 74,
    pst: 49,
    status: "fail",
    password: "sajid2023",
    gmail: "sajid@example.com",
  },
  {
    name: "Ayesha",
    rollNo: 123464,
    grade: 12,
    chemistry: 89,
    physics: 78,
    math: 91,
    english: 87,
    urdu: 79,
    pst: 51,
    status: "pass",
    password: "ayesha1234",
    gmail: "ayesha@gmail.com",
  },
  {
    name: "Fahad",
    rollNo: 123465,
    grade: 12,
    chemistry: 82,
    physics: 69,
    math: 86,
    english: 81,
    urdu: 70,
    pst: 46,
    status: "pass",
    password: "fahad2023",
    gmail: "fahad@example.com",
  },
  {
    name: "Amna",
    rollNo: 123466,
    grade: 12,
    chemistry: 79,
    physics: 71,
    math: 93,
    english: 77,
    urdu: 68,
    pst: 43,
    status: "fail",
    password: "amna1234",
    gmail: "amna@example.com",
  },
  {
    name: "Usman",
    rollNo: 123467,
    grade: 12,
    chemistry: 84,
    physics: 73,
    math: 87,
    english: 80,
    urdu: 72,
    pst: 46,
    status: "pass",
    password: "usman2023",
    gmail: "usman@example.com",
  },
  {
    name: "Tariq",
    rollNo: 123468,
    grade: 12,
    chemistry: 90,
    physics: 76,
    math: 89,
    english: 83,
    urdu: 75,
    pst: 49,
    status: "fail",
    password: "tariq1234",
    gmail: "tariq@gmail.com",
  },
];

var valid = true;
function check_valid(e, inpName) {
  if (inpName == "roll") {
    if (e.target.value.length < 6) {
      e.target.nextElementSibling.innerText =
        "Not less 6 characters or empty!";
      e.target.nextElementSibling.style.display = "block";
      valid = false;
      return;
    }
    if (isNaN(e.target.value)) {
      e.target.nextElementSibling.innerText = "Should be a number";
      e.target.nextElementSibling.style.display = "block";
      valid = false;
      return;
    }
  }
  if (inpName == "name") {
    if (!isNaN(e.target.value)) {
      console.log(e.target.value);
      e.target.nextElementSibling.innerText = "Should not be a number or empty !";
      e.target.nextElementSibling.style.display = "block";
      valid = false;
      return;
    }
  }
  if (inpName == "gmail") {
    var  regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    if (!e.target.value.match(regex)) {
      e.target.nextElementSibling.style.display = "block";
      e.target.nextElementSibling.innerText = "Invalid gmail!";
      valid = false;
      return;
    }
  }
  if (inpName == "pass") {
    if (e.target.value.length < 8) {
      e.target.nextElementSibling.innerText =
        "Not less 8 characters or empty!";
      e.target.nextElementSibling.style.display = "block";
      valid = false;
      return;
    }
  }
  valid = true;
  console.log("x");
  e.target.nextElementSibling.innerText = "";
  e.target.nextElementSibling.style.display = "none";
}
function showResult(e) {
  e.preventDefault();
  var rollNo = document.getElementById("roll");
  var gmail = document.getElementById("gmail");
  var Password = document.getElementById("pass");
  var name = document.getElementById("name");
  if (
    !valid ||
    name.value == "" ||
    rollNo.value == "" ||
    Password.value == "" ||
    gmail.value == ""
  ) {
    return;
  }

  var i = 0;
  while (i < usersData.length) {
    var checkValid = document.getElementById("invalid-inp");

    if (
      usersData[i].gmail == gmail.value &&
      usersData[i].password == Password.value &&
      usersData[i].rollNo == rollNo.value &&
      usersData[i].name == name.value
    ) {
      document.getElementById("h5").innerHTML = "Your Result";
      document.getElementsByClassName("modal-header")[0].style.backgroundColor =
        "#0093E9";
      document.getElementsByClassName("modal-header")[0].style.color = "white";
      document.getElementById("not_found").style.display = "none";
      document.getElementById("form").style.opacity = "0.2";
      document.getElementById("modal1").style.display = "flex";
      document.getElementById("table").style.display = "block";
      document.getElementById("form").style.display = "none";

      document.getElementById("col1").innerText = usersData[i].name;
      document.getElementById("col2").innerText = usersData[i].rollNo;
      document.getElementById("col3").innerText = usersData[i].chemistry;
      document.getElementById("col4").innerText = usersData[i].physics;
      document.getElementById("col5").innerText = usersData[i].english;
      document.getElementById("col6").innerText = usersData[i].urdu;
      document.getElementById("col7").innerText = usersData[i].pst;
      document.getElementById("col8").innerText = usersData[i].status;
      checkValid.style.display = "none";
      checkValid.innerText = "";
      gmail.value = "";
      Password.value = "";
      rollNo.value = "";
      name.value = "";
      return;
    }

    i++;
  }

  document.getElementById("table").style.display = "none";
  document.getElementById("not_found").style.display = "block";
  document.getElementById("modal1").style.display = "flex";
  document.getElementById("form").style.opacity = "0.1";
  document.getElementById("h5").innerHTML = "Invalid or Wrong information";
  document.getElementsByClassName("modal-header")[0].style.backgroundColor =
    "#ff0000db";
  document.getElementsByClassName("modal-header")[0].style.color = "white";
  document.getElementsByClassName("modal-body")[0].style.backgroundColor =
    "#f8b5b4";
  document.getElementById("table").style.display = "none";
  document.getElementById("form").style.display = "none";
 
}
function closeModal() {
  document.getElementById("modal1").style.display = "none";
  document.getElementById("form").style.opacity = "1";
  document.getElementById("form").style.display = "flex";
  document.getElementsByClassName("modal-body")[0].style.backgroundColor =
    "#b4dff8";
}
