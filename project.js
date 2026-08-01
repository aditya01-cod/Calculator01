let string="";

let keys = document.querySelectorAll("button");

Array.from(keys).forEach((buttons)  =>{
    buttons.addEventListener("click", (e)  =>{
        if(e.target.innerHTML == '=') {
            string= eval(string);
             document.querySelector(".output").innerText=string;
        }
        else if (e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector(".operation").innerText="0";
            document.querySelector(".output").innerText="0";

        }

else
      {  console.log(e.target.innerHTML);
        string = string + e.target.innerHTML;
        document.querySelector(".operation").innerText=string;}

    })
})
