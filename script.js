const circle={
    radius:1,
    draw(){
        console.log("draw");
    }
}

if('radius' in circle){
    console.log("yea");
    console.log('radius' in circle);
}

