addEventListener("DOMContentLoaded", () => {
    const from = localStorage.getItem("from") || window.innerWidth;
    const to = localStorage.getItem("to") || 0;
    
    // set value
    document.getElementById("from").value = from;
    document.getElementById("to").value = to;

    function sizeCalculate(ekranEni, miqdor) {
        var size = (ekranEni * miqdor) / from;
        return size;
    }
    
    document.getElementById("input").addEventListener("keyup", (e) => {
        const value = e.target.value;
        let size = Math.round(sizeCalculate(to, value));
        document.getElementById("result").innerText = size;
        document.title = `${value} = ${size}`
    });
});

// save to localStorage
const saveToLocal = (event) => {
    localStorage.setItem(event.target.name, event.target.value);
};

// get the incoming values`
document.getElementById("from").addEventListener("keyup", saveToLocal)
document.getElementById("to").addEventListener("keyup", saveToLocal)