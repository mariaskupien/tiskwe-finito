
    var n = document.getElementById("input-n");
    var R = document.getElementById("input-R");
    var T = document.getElementById("input-T");
    var p = document.getElementById("input-p");

    var WynikVElement = document.getElementById("WynikV");
    var WynikTextElement = document.getElementById("wynikV_Text");

   
 
function updateV(){
    console.log('xd');
    if(R.value !==""){        
        var WynikV = (((Number(n.value))*(Number(R.value))*(Number(T.value)))/(Number(p.value)));
        WynikVElement.value=WynikV;
        WynikTextElement.value=WynikV;
    }

}

(()=>{
    console.log('xdd');
     const button = document.getElementById('button');
button.addEventListener('click', updateV);
})();

