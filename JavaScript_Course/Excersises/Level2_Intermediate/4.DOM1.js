function DOM1Create() {
    let para = document.createElement("p")
    para.id = "ActivePara";
    para.innerHTML = "Click Submit to change this text";
    document.getElementById("DOM1Para").appendChild(para);
}

function DOM1Submit() {
    console.log("Replacing Paragraph");
    let text = document.getElementById("DOM1TextBox").value;
    let para = document.getElementById("ActivePara")
    para.innerHTML = text;
    para.id = "";
}
function DOM1Reset() {
    console.log("Reseting Paragraph");
    document.getElementById("DOM1Para").innerHTML = "<p></p>";
}