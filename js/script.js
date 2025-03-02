
// 1. completed button e click korle ja hobe


const btn = document.querySelectorAll("#btn");
// console.log(btn);

for(let i = 0; i < btn.length; i++){
    const btn1 = btn[i];
    btn1.addEventListener("click", function(event){
        // console.log("Button clicked");

        btn1.setAttribute("disabled", "disabled");
        alert("Board updated successfully");

        const taskasg = document.getElementById("task-asg");
        const taskasgint = parseInt(taskasg.innerText);
        // console.log(taskasgint);


        // challenge part
        if(taskasgint - 1 == 0){
            alert("Congratulation!!! You have completed all the current task");
        }

        const newtaskasg = taskasgint - 1;

        taskasg.innerText = newtaskasg;

        

        const checkbox = document.getElementById("check-box");
        checkboxint = parseInt(checkbox.innerText);
        // console.log(checkboxint);

        const newcheckbox = checkboxint + 1;
        checkbox.innerText = newcheckbox;

        const kotha = document.getElementById("kotha").innerText;

        const activity = document.getElementById("activity");
        const p = document.createElement("p");

    
    // function updateTime() {
    //     const now = new Date();
    //     const timeString = now.toLocaleTimeString(); // Get only the time in HH:MM:SS AM/PM format
    //     document.getElementById('time').textContent = timeString;
    // }

    // Update time every second
    // setInterval(updateTime, 1000);

    // Call the function once when the page loads
    // updateTime();



        p.innerText = `
        You have completed  the task ${kotha} at ${new Date().toLocaleTimeString()}
        `
        activity.appendChild(p);
    });
}

// 2. clear hsitory

    const clearHistory = document.getElementById("clear-history");

    clearHistory.addEventListener("click", function(){
        const activity = document.getElementById("activity");
        activity.innerText = "";
    });

// 3. discover e click korle ja hobe

    const discover = document.getElementById("discover");
    discover.addEventListener("click", function(){
        window.location.href = "new.html";
    });

// 4. new html er back to desk button e click korle ager tai ferot jabe

    // see back.js file

//5. theme button

// Select the theme button
const themeBtn = document.getElementById("theme-btn");

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add click event listener
themeBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});