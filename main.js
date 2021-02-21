

function generateRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    console.log(color);
    document.getElementById("colorvalue").value = color;
    document.getElementById("change").style.backgroundColor = color;
}