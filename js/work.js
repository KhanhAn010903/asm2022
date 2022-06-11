let menu  = document.querySelector("#menu")
document.querySelector("#button").onclick = () =>{
  menu.classList.toggle("hidden")
}

const work = [
    {
      id:1,
      image: "images/Rectangle 30.jpg",
      name: "Designing Dashboards",
      date: "2020",
      short_description: "Designing Dashboards",
      description: "   Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.",
    },
    { 
      id:2,
      image: "images/Rectangle 32.jpg",
      name: "Designing Dashboards",
      date: "2020",
      short_description: "Designing Dashboards",
      description: "   Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.",
    },
    { 
      id:3,
      image: "images/Rectangle 34.jpg",
      name: "Designing Dashboards",
      date: "2020",
      short_description: "Designing Dashboards",
      description: "   Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.",
    },
  ]
  function showWork(work){
      let result =""
      for(let i=0 ; i<work.length;i++){
          result += ` <div class="item1 border-b py-8 md:grid md:grid-cols-[246px,auto] gap-8">
          <div><img class="w-full rounded-lg" src="${work[i].image}" alt=""></div>
          <div class="mt-5 md:-mt-2">
            <h3 class="text-[30px] text-[#21243D] font-bold ">${work[i].name}</h3>
            <div class="flex space-x-4 items-center py-5">
              <span class="inline-block bg-[#142850] py-1 px-2 text-white rounded-full text-[16px]">${work[i].date}</span>
              <span class="text-[20px]">${work[i].short_description}</span>
            </div>
            <p clas="text-[16px] text-[#21243D]">
            ${work[i].description}
            </p>
          </div>
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
  render("work",showWork(work))