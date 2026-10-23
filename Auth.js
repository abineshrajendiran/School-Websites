// // Shared by apply.html, login.html and student.html.
// // Student password = name (small letters, no spaces or dots) + date of birth as DDMMYYYY
// // Example: "Ravi Kumar", born 05-03-2008  ->  ravikumar05032008
// function makePassword(name, dob) {
//   var n = String(name || "").toLowerCase().replace(/[^a-z0-9]/g, "");
//   var p = String(dob || "").split("-");           // browser date format: YYYY-MM-DD
//   return n + (p.length === 3 ? p[2] + p[1] + p[0] : "");
// }

// function cleanPassword(text) {
//   return String(text || "").toLowerCase().replace(/[^a-z0-9]/g, "");
// }

// Auth.js - shared by apply.html, login.html, student.html, school-info.html

var SCHOOL = {
  name: "GRA Group of Institutions",
  tagline: "Inspiring Minds, Building Futures",
  address: "Chennai, Tamil Nadu, India",
  phone: "9344040239",
  email: "abineshr599@gmail.com",
  founded: "2000",
  principal: "Abinesh.R",
  correspondent: "Abinesh.R",
  courses: [
    "LKG - Class 12",
    "B.E. - CSE, ECE, CIVIL, MECH, CSE (Embedded System and IoT)",
    "B.Tech - IT, AIDS, AIML"
  ],
  facilities: ["Smart classrooms", "Computer labs", "Library", "Sports ground", "Transport"]
};

// Student password = name (small letters, no spaces or dots) + date of birth as DDMMYYYY
// Example: "Abinesh.R", born 04-06-2005  ->  abineshr04062005
function makePassword(name, dob) {
  var n = String(name || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  var p = String(dob || "").split("-");           // browser date format: YYYY-MM-DD
  return n + (p.length === 3 ? p[2] + p[1] + p[0] : "");
}

function cleanPassword(text) {
  return String(text || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}