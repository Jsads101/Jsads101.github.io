function showSearch() {
    document.getElementById('addreview').style.display = "none";
    document.getElementById('searchbytopic').style.display = "block";
}

function showAddReview() {
    document.getElementById('searchbytopic').style.display = "none";
    document.getElementById('addreview').style.display = "block";
    console.log("test");
}


function isNull(x){
    if (x == ""){
        return true;
    }
}

function isValidInput(x){
    if (x == "html" || x == "css" || x == "javascript"){
        return true;
    }
}

function validateForm(){
    var x = document.forms["reviewform"]["resource"].value;
    var y = document.forms["reviewform"]["topic"].value.toLowerCase();
    var z = document.forms["reviewform"]["review"].value;
    if (isNull(x) || isNull (y) || isNull(z)) {
        document.getElementById('reviewpageoption').style.display = "block";
        return false;
    } else if (!isValidInput(y)){
        window.alert("You must enter CSS, HTML or Javascript");
        return false;
    } else {
        window.alert("Thank you for your review!")
        return true;
    }
}



function correctInput(){
    var x = document.forms["inputtopic"]["topic"].value.toLowerCase()

    if (x != "css" && x !="javascript" && x !="html") {
        window.alert("You must enter CSS, HTML or Javascript");
        return false;
    }
}


