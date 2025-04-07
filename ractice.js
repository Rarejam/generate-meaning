const h1 = document.querySelector('.ractice')
const p = document.createElement('p')
h1.style.color = 'grey'
document.body.append(p)


const searchInput = document.querySelector('input');
const generateBtn = document.querySelector('.generate-btn');
const mainContent = document.querySelector('.main-content')
const clearBtn = document.querySelector('.clear-btn')
// const param = searchInput.value

let freePi = 'https://en.wikipedia.org/api/rest_v1/page/summary/'
generateBtn.addEventListener('click',() => {
    if(searchInput.value == '') {
        alert('input a valid word')
    } else{
        mainContent.textContent = "⏳ Searching...";

    
    param = searchInput.value
    async function paragraph() {
    const note = await fetch(`${freePi}` + param)
    // const note = await fetch(`${freePi} + photosynthesis`)
    // const note = await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/Spoon')
    const data = await note.json()
//     try{

//     if(!data.extract){
//         throw new Error('there is no avaiable explanation of such';
//     }
// }
// catch (error) {
//     mainContent.textContent = "❌ Could not fetch topic. Try a different keyword.";
//     console.error("Error:", error.message);
//   }
     console.log(data.extract)
     console.log(data)
 mainContent.textContent = data.extract
} 
console.log(paragraph())
paragraph()
console.log(searchInput.value)
    }

})  
clearBtn.addEventListener('click',() => {
    searchInput.value = ''
    mainContent.textContent = ''
    // mainContent.value = ''
})