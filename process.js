const ul = document.querySelector("ul")
const addButton = document.querySelector("#addButton")
const nameinput = document.querySelector("#name")
const ageinput = document.querySelector("#age")
const jobinput = document.querySelector("#job")
const placeinput = document.querySelector("#place")

let info = []

const BASE_URL = "http://localhost:3000/user"
setList()

//리스트 다시작성 함수
async function setList() {
    const res = await fetch(`${BASE_URL}`)
    const data = await res.json()
    info = data
    ul.innerHTML = ""
    for (let i = 0; i < info.length; i++) {
        ul.innerHTML += getListItemTag(i)
    }
    deleteButton()
}

//ul작성 함수
function getListItemTag(i) {
    return `<ul class ="list">
    <li>이름 : ${info[i].name}</li>
    <li>나이 : ${info[i].age}</li>
    <li>직업 : ${info[i].job}</li>
    <li>사는곳 : ${info[i].place}</li> <button class="deleteButtons">삭제하기</button>
    </ul>`
}

//삭제함수
function deleteButton() {
    const deleteButtons = document.querySelectorAll(".deleteButtons")
    console.log(deleteButtons)
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", async function () {
            alert("삭제하시겠습니까?")
            console.log(info[i])
            await fetch(`http://localhost:3000/user?id=${info[i].id}`, { method: "DELETE" })
            info.splice(i, 1)
            setList()
        })
    }
}

//추가버튼 함수
addButton.addEventListener("click", async function () {
    console.log(nameinput)
    await fetch(
        `http://localhost:3000/user?name=${nameinput.value}&age=${ageinput.value}&job=${jobinput.value}&place=${placeinput.value}`,
        {
            method: "POST",
        }
    )

    info.push({
        name: nameinput.value,
        age: ageinput.value,
        job: jobinput.value,
        place: placeinput.value,
    })
    console.log(info)
    setList()
})
