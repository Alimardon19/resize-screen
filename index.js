var s1920 = 1920;
var s1366 = 1366;
function sizeCalculate(ekranEni, miqdor) {
    var size = (ekranEni * miqdor) / 1920;
    return size;
}


document.getElementById("input").addEventListener("keyup", (e) => {
    const value = e.target.value;
    let size = Math.round(sizeCalculate(s1366, value));
    document.getElementById("result").innerText = size;
    document.title = `Resize screen | ${value} = ${size}`
});