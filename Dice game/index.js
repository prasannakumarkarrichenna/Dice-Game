



function f1(){
    var ran1 = Math.floor(Math.random()*6)+1;
    var ranimg1 = "images/dice"+ran1+".png"
    document.querySelector(".img1").setAttribute("src",ranimg1)
    var ra2 = Math.floor(Math.random()*6)+1;
    var ranimg2 = "images/dice"+ra2+".png"
    document.querySelector(".img2").setAttribute("src",ranimg2)

    if (ran1>ra2){
        document.querySelector("h1").innerHTML="First player won"
    }
    else if(ra2>ran1){
        document.querySelector("h1").innerHTML="Second player won"
    }
    else{
        document.querySelector("h1").innerHTML="Draw"
    }

}
 



