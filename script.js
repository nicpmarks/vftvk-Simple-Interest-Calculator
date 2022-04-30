function loadSelect()
{
    var yearsElement = document.getElementById("years");
    for (var i=1;i<=10;i++) {
        var option = document.createElement("option");
        option.value = i.toString();
        option.text =  i.toString();
        yearsElement.appendChild(option);
    }
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var total = parseInt(principal) + interest;
    
    var result = document.getElementById("result");
    result.innerHTML = "";
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        
