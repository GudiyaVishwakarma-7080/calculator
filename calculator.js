function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;

}
function Result() {
    var n1 = document.getElementById('res').value;
    try {
        var n2 = eval(n1.replace('x', '*'));
        document.getElementById('res').value = n2;
    }
    catch {
        document.getElementById('res').value = "Error";
    }
}
function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
}
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validkeys = '123456789+-*/.%';
    if (validkeys.includes(key)) {
        Solve(key === '*' ? 'x' : key);
    }
    else if (key === "Enter") {
        Result();
    }
    else if (key === 'Bcakspace') {
        Back();
    }
    else if (key.toLowerCase() === 'C') {
        Clear();
    }
});