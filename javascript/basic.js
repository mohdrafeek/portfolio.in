var a=0;
function display(){
    var change=document.getElementById("phone");
    if(a%2==0)
    {
        change.style.display="block";
        a=a+1;
    }
    else{
        change.style.display="none";
        a=a+1;
    }

}

var b=0;
function mode(){
    var about=document.getElementById("about");
    var contact=document.getElementById("contact");
    if(b%2==0)
    {
        document.getElementById("mode").innerText="Light"
        document.getElementById("mode").style.color="white"
        about.style.backgroundColor="black"
        contact.style.backgroundColor="rgb(59, 58, 58)"
        b=b+1
    }
    else{
        document.getElementById("mode").innerText="Dark"
        document.getElementById("mode").style.color="black"
        about.style.backgroundColor=""
        contact.style.backgroundColor=""
        b=b+1
    }
}


var c=0;
function mode1(){
    var pro=document.getElementById("bdy");
    
    
    if(c%2==0){
        pro.style.backgroundColor="rgb(59, 58, 58)"
        for(var i=0; i<28; i++){
            var pra=document.getElementsByClassName();
        }
        c=c+1;
    }
    else{
        pro.style.backgroundColor=""
        pra.style.color=""
        c=c+1;
    }
}