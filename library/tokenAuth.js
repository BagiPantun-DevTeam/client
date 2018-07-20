function tokenAuth () {
    let token = localStorage.getItem('tokenbagipantun')
    if(!token) {
        window.location.replace('/index.html')
        alert("You must login or register to view our Mainpage :(")
    }
}