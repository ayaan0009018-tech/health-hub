const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let filter =
searchInput.value.toLowerCase();

let diseases =
document.querySelectorAll(".disease-btn");

diseases.forEach(function(item){

let text =
item.textContent.toLowerCase();

if(text.includes(filter)){
item.style.display = "block";
}
else{
item.style.display = "none";
}

});

});

}
function darkMode(){
    document.body.classList.toggle("dark");
}
function calculateBMI(){

let w =
document.getElementById("weight").value;

let h =
document.getElementById("height").value/100;

let bmi =
w/(h*h);

document.getElementById("result")
.innerHTML =
"Your BMI: " + bmi.toFixed(2);

}
console.log("HealthHub Website Loaded Successfully!");
console.log("HealthHub JS Loaded");
