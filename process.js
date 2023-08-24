const ul = document.querySelector("ul")
console.log(ul)

const addButton = document.querySelector("#addButton")
console.log(addButton)
// const inputs = document.querySelectorAll("input")
const nameinput = document.querySelector("#name")
const ageinput = document.querySelector("#age")
const jobinput = document.querySelector("#job")
const placeinput = document.querySelector("#place")


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
//첫화면 
ul.innerHTML=''
setList()
deleteButton()

//리스트 다시작성 함수
function setList(){
    for (let i=0; i<info.length; i++) {
        ul.innerHTML = ul.innerHTML + ` <ul class ="list">
                                        <li>이름 : ${info[i].name}</li>
                                        <li>나이 : ${info[i].age}</li>
                                        <li>직업 : ${info[i].job}</li>
                                        <li>사는곳 : ${info[i].place}</li> <button class="deleteButtons">삭제하기</button>
                                        </ul>`
    }
}

//삭제함수 
function deleteButton () {
    const deleteButtons = document.querySelectorAll(".deleteButtons")
    console.log(deleteButtons)
    for(let i = 0; i<deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click',function() {
            alert("삭제하시겠습니까?")
            info.splice(i,1)
            ul.innerHTML = ''
            setList()
            deleteButton()
        })
    }
}


//추가버튼 함수 
addButton.addEventListener('click',function(){
    info.push(
        {
            name : nameinput.value,
            age : ageinput.value,
            job : jobinput.value,
            place : placeinput.value
        }
    )
    console.log(info)
    ul.innerHTML = ''
    setList()
    deleteButton()
})

