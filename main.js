 function oreomake(){
     var start=100;
      var str=document.querySelector("input").value;
      document.querySelector("input").style.visibility="hidden";
   document.querySelector("button").style.visibility="hidden";
         var first=true;
   for(var i=0;i<=str.length-1;i++)
   {
     console.log(i);
     if(str[i]=='O' || str[i]=='o')
     {
        var DOM_a=document.querySelector("body");
        var DOM_img = document.createElement("div");
        if(first==true)
        {    DOM_img.style.width="200px";
        DOM_img.style.height="20px";
    DOM_img.style.backgroundColor="peru";
    DOM_img.style.borderTopRightRadius="5px";
    DOM_img.style.borderTopLeftRadius="5px";
    DOM_img.style.borderBottomRightRadius="20px";
   DOM_img.style.borderBottomLeftRadius="20px";
        }
         else
        { if(i==str.length-1) {
          var DOM_a=document.querySelector("body");
        var DOM_img = document.createElement("div");
          DOM_img.style.width="200px";
        DOM_img.style.height="20px";
    DOM_img.style.backgroundColor="peru";
    DOM_img.style.borderTopRightRadius="80px";
    DOM_img.style.borderTopLeftRadius="80px";
    DOM_img.style.borderBottomRightRadius="5px";
   DOM_img.style.borderBottomLeftRadius="5px";
        
     }
           else{
              DOM_img.style.backgroundColor = "peru";
            DOM_img.style.width = "200px";
            DOM_img.style.height = "10px";
            DOM_img.style.borderRedius = "5px";
           }
        
        }
         DOM_a.insertBefore(DOM_img, DOM_a.children[0]);
      
     }
     else if(str[i]=='R' || str[i]=='r')
     {
       var DOM_a=document.querySelector("body");
       var DOM_img = document.createElement("div");
          
          DOM_img.style.backgroundColor = "white";
            DOM_img.style.width = "200px";
            DOM_img.style.height = "10px";
            DOM_img.style.borderRedius = "5px";
        DOM_a.insertBefore(DOM_img, DOM_a.children[0]);
       i++;
     }
     
     if(str[i]=='&')
     {
       var DOM_a=document.querySelector("body");
       var DOM_img = document.createElement("div");
          
          DOM_img.style.backgroundColor = "black";
            DOM_img.style.width = "200px";
            DOM_img.style.height = "60px";
             DOM_a.insertBefore(DOM_img, DOM_a.children[0]);
       
     }
    
     first=false;
     }
     }
function changeSize(){
          console.log('hi');
          var arr =[
              "red","green","yellow","brown"
          ]   ;  
 var change =document.getElementById('p');
    change.style.backgroundColor =arr[Math.floor(Math.random() * 4)];
     }
      
