let count = 0;

function incresevalue(){
    count++ ;
    updatecounter()
}

function decresevalue(){
    count-- ;
    updatecounter()
}

function updatecounter(){
    document.getElementById("txt").innerText=count ;
}





        
    