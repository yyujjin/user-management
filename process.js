const ul = document.querySelector("ul")
console.log(ul)

const addButton = document.querySelector("#addButton")
console.log(addButton)
const inputs = document.querySelectorAll("input")
const info = [
    {
        name:'박수현',
        age : 29,
        job : "programmer",
        place : "일광"
    },
    {
        name : "박유진",
        age : 28,
        job : null,
        place : "수영"
    },
    {
        name : "박정숙",
        age : 26,
        job : "공무원",
        place : "경주"
    }
]

function setList(){
    for (let i=0; i<info.length; i++) {
        ul.innerHTML = ul.innerHTML + ` <ul class ="list">
                                        <li>이름 : ${info[i].name}</li>
                                        <li>나이 : ${info[i].age}</li>
                                        <li>직업 : ${info[i].job}</li>
                                        <li>사는곳 : ${info[i].place}</li> <button class="deleteButton">삭제하기</button>
                                        </ul>`
    }
}

ul.innerHTML=''
setList()

addButton.addEventListener('click',function(){
    info.push(
        {
            name : inputs[0].value,
            age : inputs[1].value,
            job : inputs[2].value,
            place : inputs[3].value
        }
    )
    ul.innerHTML = ''
    setList()
})