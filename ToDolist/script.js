// elementleri secdik 

const myinp = document.querySelector("#myinp");
const myform = document.querySelector("#myform");
const myaddpart = document.querySelector("#myaddpart");



// myform submmit olanda hali 
myform.addEventListener("submit", function (e) {
    // inputun defolt deyerlerini sifirlayiriq ki page yenilenende yazdigimiz getmesin 
    e.preventDefault();
    // bos deyer girile bilmesin 
    if (!myinp.value) {
        return

    }
    // elementler yaradiriq 
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    // delete buttonu yaradiriq 
    const button = document.createElement("button")
    button.textContent = "delete";
    td.textContent = myinp.value;
    tr.appendChild(td);
    td.appendChild(button)
    myaddpart.appendChild(tr);
    // delete buttonunda silinsin deye 
    button.addEventListener("click", function () {
        td.remove()

    })
    //  sonda input 0 lansin deye  
    myinp.value = "";
});


