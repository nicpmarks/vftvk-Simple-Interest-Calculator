
// Load year options 1-10 into select box on form load
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

// Compute interest
function compute()
{
    var principal = document.getElementById("principal").value;

    if (principal<=0) {
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var total = parseInt(principal) + interest;
    
    var result = document.getElementById("result");

    // Use <mark> tag for highlighting
    result.innerHTML = "<br/>If you deposit <mark>$" + principal + "</mark>,<br/>" +
    "at an interest rate of <mark>" + rate + "%</mark>.<br/>" +
    "You will receive an amount of <mark>$" + total + "</mark>,<br/>" +
    "in the year <mark>" + year + "</mark>.";
}

// Update interest rate slider indicator 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        
