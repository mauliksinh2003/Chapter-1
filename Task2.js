let i = 0 ;
let value = ""

for (i=0 ; i<=100 ; i++){

    if(i%2==0){

    value +=  i + " " + "\n"

    }
}

document.getElementById("txt").innerText = value ;
