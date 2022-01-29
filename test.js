/*  const add = document.querySelector('#add')
const removeAll = document.querySelector('#remove')
const ul = document.querySelector('#records-ul')



const li_maker = (get_item) => {
    const ul = 
    `
    <li>
    <div class="records-li">
        <p class="name">${get_item[0]}</p>
        <p class="age">${get_item[1]} </p>
        <p class="age">${get_item[2]} </p>
        <img role="button" onclick="return this.parentNode.remove()" class="remove_btn"   src="https://img.icons8.com/ios-glyphs/60/000000/delete-sign.png"/>
    </div>
    </li>
    `




    return ul
}




const form = document.getElementById('form')
const input_name = form.elements['name']
const age = form.elements['age']
const email = form.elements['mail']

let count = 0 ;

form.addEventListener('submit', (event) => {
    event.preventDefault()
    count++
    localStorage.setItem(`${count}`, JSON.stringify([input_name.value, age.value, email.value]) )
    
    console.log(JSON.parse(localStorage.getItem(`${count}`)))

    let li = li_maker(JSON.parse(localStorage.getItem(`${count}`)))
    
    ul.innerHTML += li
    
    input_name.value = ""
    age.value = ""
    email.value = ""
})



 */

