// import _ from "lodash";
var input = []
var html = ""


function createlist(input) {
    input.forEach(wizard => {
        html += '<li>' + wizard[0] + '=>'+ wizard[1] + 'pair' +'</li>';
    })
    html = '<ul>' + html + '</ul>';
    document.querySelector('#pairlist').innerHTML = _.sum(_.map(input,z=>z[1]));
    
    
}
function validateForm() {
    var x = document.getElementById("color").value;
    document.getElementById("color").value = ''
    
    if (x.length) {
        input.push(x)
        document.querySelector('#demo').innerHTML = input;
       
    }

}


function calculate(input) {
    
    let uniquecolor = _.uniq(input)
    let pairlist = []
    uniquecolor.forEach(c => {
        let colorarray = input.filter(z => z === c).length
        let pairs = (colorarray - (colorarray % 2)) / 2

        pairlist.push([c, pairs])

    })
    if (pairlist.length) {
        
        createlist(pairlist)
    }
    // return pairlist
}
var colorfield = document.getElementById("color");
colorfield.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     validateForm()
    }
  });
document.getElementById("pair").onclick = function () {
        calculate(input)
};
document.getElementById("reset").onclick = function () {
    debugger
    input = []
    document.querySelector('#demo').innerHTML = input;
};