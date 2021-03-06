const button = document.getElementById("button")
const menu = document.getElementById("menu")
button.addEventListener("click" , function(){
    menu.classList.toggle("hidden")
})




const listContent = [
    {
        id:1,
        title : "UI Interactions of the week",
        date : "12 Feb 2019",
        short_description:"Express, Handlebars",
        description :" Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id:2,
        title : "UI Interactions of the week",
        date : "12 Feb 2019",
        short_description:"Express, Handlebars",
        description :" Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id:3,
        title : "UI Interactions of the week",
        date : "12 Feb 2019",
        short_description:"Express, Handlebars",
        description :" Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    }
];
function showContent(listContent){
    let result="";
    for(let i=0 ; i<listContent.length ; i++){
        result += `   <div class="item py-8  border-b">
        <h3 class="py-5"><a href="" class="text-[30px] font-bold">${listContent[i].title}</a></h3>
        <div class="flex space-x-4 py-2">
          <span class="text-[15px] md:text-[20px] font-bold">${listContent[i].date}</span>
          <span>|</span>
          <span class="text-[15px] md:text-[20px] text-[#8695A4]">${listContent[i].short_description}</span>
        </div>
        <p class="text-[16px]">
        ${listContent[i].description}
        </p>
      </div>`
    }
    return result
}
function render(elementId , content){
    const id = document.getElementById(elementId)
    if(id){
        id.innerHTML = content
    }
}
render("content" , showContent(listContent))