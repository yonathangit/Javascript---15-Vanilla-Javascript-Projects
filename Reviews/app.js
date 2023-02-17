// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];


const personImgEl = document.getElementById("person-img")
const jobEl = document.getElementById("job")
const infoEl = document.getElementById("info")
const authorEl = document.getElementById('author')

const prevBtnEl = document.querySelector(".prev-btn")
const nextBtnEl = document.querySelector(".next-btn")
const randomBtnEl = document.querySelector('.random-btn')


let currentItem = 0
personImgEl.setAttribute("src", reviews[0].img)
authorEl.textContent = reviews[0].name
jobEl.textContent = reviews[0].job
infoEl.textContent = reviews[0].text

nextBtnEl.addEventListener("click", function(){
  if(currentItem < (reviews.length - 1) ){
    currentItem++
    render()
  }
})

prevBtnEl.addEventListener("click", function(){
  if(currentItem > 0){
    currentItem--
    render()
  }
})

randomBtnEl.addEventListener("click", function(){
  currentItem = randomNumber()
  render()
})

function randomNumber(){
  return Math.floor(Math.random()*reviews.length)
}
function render(){
    personImgEl.setAttribute("src", reviews[currentItem].img)
    authorEl.textContent = reviews[currentItem].name
    jobEl.textContent = reviews[currentItem].job
    infoEl.textContent = reviews[currentItem].text
}


/*
  Alternative

  let currentItem = 0

  window.addEventListener('DOMContentLoaded', function(){
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
  })

*/