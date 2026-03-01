function checkStatus() {
    let score = Math.floor(Math.random() * 100);
    document.getElementById("cleanliness").innerText = score + "%";

    if (score < 50) {
        alert("⚠ Immediate Cleaning Required!");
    } else if (score < 75) {
        alert("⚠ Maintenance Needed Soon!");
    } else {
        alert("✅ Hygiene Status Good!");
    }
}