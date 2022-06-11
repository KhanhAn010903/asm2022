//Tạo menu------------------------
const menu = document.getElementById("menu");
const button = document.getElementById("button")
button.addEventListener("click", function () {
    menu.classList.toggle("hidden")
})

//------------------------
const id = new URLSearchParams(window.location.search).get("id")
const work = [
  {
    id:1,
    title: "Designing Dashboards with usability in mind",
    date : "2020",
    short_description : "Dashboard, User Experience Design",
    description : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image : "images/Rectangle 4.png"
},
{
  id:2,
  title: "Designing Dashboards with usability in mind",
  date : "2020",
  short_description : "Dashboard, User Experience Design",
  description : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  image : "images/Rectangle 5.png"
},
{
  id:3,
  title: "Designing Dashboards with usability in mind",
  date : "2020",
  short_description : "Dashboard, User Experience Design",
  description : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  image : "images/Rectangle 6.png"
}
]
  
const found = work.find(function(element){
  return element.id == id
}) 
document.getElementById("column").innerHTML = `  <div class=" mt-5">
    <h2 class="text-3xl font-bold py-5">${found.title}</h2>
    <div class="flex space-x-8 py-2">
      <span class="px-2 bg-[#FF7C7C] rounded-lg">${found.date}</span>
      <span>${found.short_description}</span>
    </div>
    <p class="pb-4">
    ${found.description}
    </p>
    <div><img class="w-full" src="${found.image}" alt=""></div>
  </div>`



