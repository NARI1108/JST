console.log(2+2);





console.log("Naser");
console.log(9) ;   
let name="naser ahmadi";
console.log(name);
let fName="Liya" , lName="Silver";
console.log(fName,lName);
fName="Alisent";
console.log(fName,lName);
lName="ahmadi";
console.log(fName,lName);
const news="naser";
console.log("news");
console.log(news);
/*null*/
let value=null;
console.log(null); 
/*undefiend*/
value=undefined;
console.log(value);
value;
console.log(value);
/*String*/
value="motherFucker";
console.log(value);
/*integer*/
value=11;
console.log(value);
const lol=11+12;
//lol=34;
console.log(lol);
let string='ali';
console.log(string);
console.log(typeof string);
string="reza";
console.log(typeof string);
string=1;
console.log(typeof string);
string=1.7;
console.log(typeof string);
let admin=true;
console.log(typeof admin);
let sextuality = "man";
let age =22;
let colorSkin="white";
let human ={sexuality:"man",age:22,colorSkin:"white"};
console.log(human.sexuality);
console.log(human);
console.log(human["age"]);
console.log(human["colorSkin"]);
console.log(human["sexuality"]);
let users =["naser","hill","zahra"]
console.log(users)
users[3]="hoool"
console.log(users)
users[0]="negin"
console.log(users);
users[4]=4487;
console.log(users);
console.log(users.length);
console.log(typeof users);
function eat(){
    console.log("Pl eat my BWC");
}
eat();
function math(life){
    let calcu =2+3;
    console.log(calcu+life);
}
let resualt = math("fuck god");
console.log(resualt);
function add(number){
    return  number + number;
}
let nataij = add(3);
console.log(nataij);
let x= 10;
let y=11;
console.log(x+y);
console.log(x*y);
console.log(x/y);
console.log(x-y);
console.log(x%y);
console.log(x**y);
console.log(x);
console.log(x++);
console.log(x);
console.log(++x);
console.log(x);
let o=10;
let ip=13;
o=o+ip;
console.log(o);
//-= += *= /= %=
o+=ip;
o*=ip;
o/=ip;
o-=ip;
o%=ip;
console.log(o);
let n=1;
console.log(n!=="1");
let athenticated = true;
let buttontext = athenticated!==true? "adshbord":"login";
console.log(buttontext);
let productPrice=1000;
let productCout=2;
let cridet=1200;
let buy = productCout>=3 || productPrice<cridet;
console.log(!buy); 
console.log(false||true);
console.log(false||1);
console.log(false||"Naser");
console.log(false||0);
console.log(1 & 3);
//00000001
//00000011
//00000011
let r =2+3*10;
console.log(r);
let hour=19.30;
if(hour>=6 && hour<12){
      console.log("good morning");
}
else if(hour>=12 && hour <=15)
{
      console.log("good noon");
}else if(hour>12 && hour<=18){
    console.log("good Afternoon");
}else if(hour=>18 && hour<19){
     console.log("good Evening");
}
//////////////////////////////
let myName="Neon";
switch(myName){
 
    case "Naser":
        console.log("hey girls");break;
    case "Neon":
        console.log("hello jesson");break;
    default:
        console.log("it is nothing here boy");    

}
for(let i=0;i<=5;i++){
console.log("let me");
}
let i = 0;
while(i<=5){
   console.log("let me love u");
   i++;
}
let j=0;
do{
    console.log("let me fuck u ");
    j++;
}while(j<=5);
const lady = {name:"loren",age:18};
for(let key in lady){
    console.log(key);
    console.log(lady[key]);
}
const colors =["naser","loren"];
for(let key in colors){
    console.log(key);
    console.log(colors[key]);
}
for(let key of colors){
    console.log(key);
}
console.log("here");
let k=0;
while(k<=10){
    if(k == 5){
        k++;
      continue;
    }
    console.log(k);
    k++;
}
console.log("workout");
let circle ={
    radius:1,
    location:{
     t:1,
     w:1
    },
    isVisible:true,
    draw:function(){console.log("draw")}
};
circle.draw();
console.log("hear");
let circle1 ={
     radius:1,
     location:{
     t:1,
     w:2,
     },
     isVisible:false,
     draw:function(){console.log("four")}
};
circle.draw();
let radius =1;
let q=1;
let a=1;
function draw(){}
let circle12={
    radius:1,
    location:{
     q:1,
     a:1
    },
    isVisible:true,
    draw:function(){console.log("naser")}
};
circle12.draw();
let ra=12;
let cv=222;
let cb=222;
function root(){};
let fofof={
    ra:12,
    loaction:{
        cv:222,
        cb:222
    },
    isVisible:false,
    root:function(){console.log("voot")}
};
fofof.root();
console.log("below");
let radius1=11;
let vertical=12;
let horizontal=12;
function get(){};
let objectCircle={
    radius1:11,
    location:{
        vertical:12,
        horizontal:12
    },
    isVisible:true,
    get:function(){console.log("hot")},
};
  objectCircle.get();
let radiusgo=12;
let verticalgo=1;
let horizontalgo=1;
let you={
    radiusgo:12,
    location:{
        verticalgo:1,
        horizontal:1
    },
    isVisible:true,
    got:function(){console.log("go away")}
};
you.got();
let obt={
    rds:1,
    location:{
        of:1,
        am:1
    },
    isVisible:true,
    View:function(){console.log("Damn")}
};
  obt.View();
  //////////////////////////////////
 console.log("STAET FROM HERE");
 function createCircle(radius){
        return{ radius,
         foun(){console.log("draw")}}
 };
 let circle34 =createCircle(565656);
 console.log(circle34);
 let circle5353 = createCircle(64646);
 console.log(circle5353);
 /////////////////////////////////////
console.log("I am starting from here");
const rectangle={
    radius:3.14
};
rectangle.color="red";
rectangle.draw=function(){};
delete rectangle.radius;
delete rectangle.color;
delete rectangle.draw;
console.log(rectangle);
////////////////////////////////////
console.log("second");
function green(color){
    return{
        color,
        draw(){console.log("painter")}
    }
}
    let peper = green(3);
    console.log(peper);
    function wood(food){
        this.food=food,
        this.draw=function(){
            console.log("eat");
        }
    }
    const another  = new wood(4321);
    console.log(another);
    ////////////////////////////////
     console.log("starting to codeing here");
     function ceiling(color){
       return{ color:color,
        deital:{
            lamp:1,
            top(){console.log("home has a ceiling")}
        }}
     }
     const home =ceiling(2);
     console.log(home);
     ////////////////////////////////
     function diamond(diameter){
           this.diameter=diameter;
           this.Draw=function(){
               console.log("drawing");
           }
     }
     const raw  = new diamond(3);
     diamond.apply({},[1,2]);
     console.log(diamond);
     diamond.call({},1233445);