const records_ul = document.getElementById('records-ul')

const form = document.getElementById('form')
const input_name = form.elements['name']
const age = form.elements['age']
const mail = form.elements['mail']



form.addEventListener('submit' , (e) => {
    e.preventDefault()
    records_ul.innerHTML = ""
    push_list(input_name.value, age.value, mail.value,new Date().toString())
    input_name.value = ""
    age.value = ""
    mail.value = ""
    render()
})



render()


function render () 
{    
    let list = al_storage()
    list.forEach(e => {
            create_li(e.name, e.age, e.mail,e.Id)
    })
}

function al_storage(){
    let list = []
    let keys = Object.keys(localStorage)
    keys.forEach((e,i) => {
        list[i] = JSON.parse(localStorage.getItem(e))
    })
    return list
}



function create_li(name, age, mail, Id)
{
    let p_name = document.createElement('p')
    p_name.textContent = name
    let p_age = document.createElement('p')
    p_age.textContent = age
    let p_mail = document.createElement('p')
    p_mail.textContent = mail

    let img = document.createElement('img')
    img.src = "https://img.icons8.com/ios-glyphs/60/000000/delete-sign.png"
    img.setAttribute('id' , Id)

    img.onclick = remove_list

    let li = document.createElement('li')
    li.classList = 'records-li'

    li.appendChild(p_name)
    li.appendChild(p_age)
    li.appendChild(p_mail)
    li.appendChild(img)

    records_ul.appendChild(li)
}

function push_list (name, age, mail , Id) {
    let myObj = {
        name : name,
        age: age,
        mail:mail,
        Id:Id
    }
    localStorage.setItem(Id, JSON.stringify(myObj))    
}

function remove_list(){
    let keys = Object.keys(localStorage)
    
    keys.forEach((e) => {
        if(this.id == e){
            localStorage.removeItem(e)
        }
    });
    records_ul.innerHTML = " "
    render()
}