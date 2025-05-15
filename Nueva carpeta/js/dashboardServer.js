tokenValidate()




function logout() {
    localStorage.removeItem('token')
    location.href = '../index.html'
}

function tokenValidate(){
    const token=localStorage.getItem('token')
    if(token !== 'QpwL5tke4Pnpja7X4'){
        location.href = '../index.html'
    }
    console.log("autenticado",token)
}
