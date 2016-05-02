var data = [
    ["小明", 80, 90, 70, 240],
    ["小红", 90, 60, 90, 240],
    ["小亮", 60, 100, 70, 230]
];

var term = [0, 0, 0, 0];
var defaultTerm = ["语文", "数学", "英语", "总分"];

function sortData(data, i, j) {
    data.sort(function(a, b) {
        if (j == 0) {
            if (a[i] < b[i]) {
                return 1;
            }
            if (a[i] > b[i]) {
                return -1;
            }
            return 0;
        } else if (j == 1) {
            if (a[i] > b[i]) {
                return 1;
            }
            if (a[i] < b[i]) {
                return -1;
            }
            return 0;
        }
    })
    return data;
}

function tableRender(data) {
    var output = "";
    for (var i = 0; i < data.length; i++) {
        output += "<tr><td>" + data[i][0] + "</td><td>" + data[i][1] + "</td><td>" + data[i][2] + "</td><td>" + data[i][3] + "</td><td>" + data[i][4] + "</td></tr>";
    }
    document.getElementById("tableRender").innerHTML = output;
    console.log("done");
}

function titleRender(term, defaultTerm) {
    for (var i = 0; i < term.length; i++) {
        var id = "bottom" + (i + 1);
        if (term[i] == 0) {
            document.getElementById(id).innerHTML = defaultTerm[i];
        } else if (term[i] == 1) {
            document.getElementById(id).innerHTML = defaultTerm[i] + "&#9661;";
        } else if (term[i] == 2) {
            document.getElementById(id).innerHTML = defaultTerm[i] + "&#9651;";
        }
    }
}


function doSort(element, i) {
    console.log(element);
    if (term[i - 1] == 0) {
        sortData(data, i, 0);
        tableRender(data);
        term = [0, 0, 0, 0];
        term[i - 1] = 1;
        titleRender(term, defaultTerm);
    } else if (term[i - 1] == 1) {
        sortData(data, i, 1);
        tableRender(data);
        term = [0, 0, 0, 0];
        term[i - 1] = 2;
        titleRender(term, defaultTerm);
    } else if (term[i - 1] == 2) {
        sortData(data, i, 0);
        tableRender(data);
        term = [0, 0, 0, 0];
        term[i - 1] = 1;
        titleRender(term, defaultTerm);
    }
    console.log(term);
}

function init() {
    tableRender(data);
    titleRender(term, defaultTerm);
    document.getElementById("bottom1").addEventListener("click", function() {
        doSort(this, 1)
    }, false);
    document.getElementById("bottom2").addEventListener("click", function() {
        doSort(this, 2)
    }, false);
    document.getElementById("bottom3").addEventListener("click", function() {
        doSort(this, 3)
    }, false);
    document.getElementById("bottom4").addEventListener("click", function() {
        doSort(this, 4)
    }, false);
}
window.onload = function() {
    init();
}