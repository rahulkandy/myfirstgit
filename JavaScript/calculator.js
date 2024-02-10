function bclick(val) {

    document.getElementById("displayscreen").value += val;
}

function klear() {

    document.getElementById("displayscreen").value = ""
}

function ekual() {

    var text = document.getElementById("displayscreen").value;
    var result = eval(text);
    document.getElementById("displayscreen").value = result;
}
