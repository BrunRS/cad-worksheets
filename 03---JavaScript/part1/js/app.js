function button(str1,str2) {
    var image = document.getElementById(str2);
    if (str1=="ButtonId4") {
        document.getElementById(str1).classList.toggle("fa-stop-circle");
        if (image.classList.length==3) {
            image.classList.add("device-on");
        } else if(image.classList.length==4){
            image.classList.remove("device-on");
        }
    }else {
        document.getElementById(str1).classList.toggle("fa-toggle-on");
        if (image.classList.length==3) {
            image.classList.add("device-on");
            image.classList.remove("far");
            image.classList.add("fas");
        } else if(image.classList.length==4){
            image.classList.remove("device-on");
            image.classList.remove("fas");
            image.classList.add("far");
        }   
    }
}