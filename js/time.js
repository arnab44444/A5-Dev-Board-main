function updateDate() {
    let today = new Date();
    let formattedDate = today.toDateString(); // Example: "Sun Mar 03 2025"
    
    document.getElementById("date-display").innerText = formattedDate;
}
updateDate();

//proti second e update check kra
setInterval(() => {
    updateDate();
},1000);