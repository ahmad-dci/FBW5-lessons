const initApp = () => {
    const addUserBtn = document.querySelector('#addBtn')
    addUserBtn.addEventListener('click', () => {
        addUser()
    })
}


const addUser = () => {
    const userNameElement = document.querySelector('#userNameInp') 
    const userAgeElement = document.querySelector('#ageInp') 
    const usersListElement = document.querySelector('#userList')

    const newelement = document.createElement('li')
    newelement.innerText = userNameElement.value + '    ' + userAgeElement.value
    usersListElement.append(newelement)


}



initApp()


