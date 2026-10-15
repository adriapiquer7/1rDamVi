function getCookie(cname){
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

document.body.style.backgroundColor=getCookie("colorfons");
const opciomarcada=document.querySelector("select")
opciomarcada.value=getCookie("colorfons")


function canviColor(){
    const data = new Date()
    data.setDate(data.getDate()+1)

    console.log(data)
    document.body.style.backgroundColor=opciomarcada.value;
    document.cookie=`colorfons=${opciomarcada.value}; expires:${data}`;
}