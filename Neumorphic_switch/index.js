function change(e){
    const el=document.getElementById('default')
    let i=parseInt(e)
    if(i==0){
    el.classList.remove("yellow");
    el.classList.remove("green");
    el.classList.remove("default");
    el.classList.add("red");
    console.log(i)

}
    if(i==1){
        el.classList.remove("green");
        el.classList.remove("default");
        el.classList.remove("red");
        el.classList.add("yellow");
        console.log(i)

    }
    if(i==2){
        el.classList.remove("green");
        el.classList.remove("default");
        el.classList.remove("red");
        el.classList.remove("yellow");
        el.classList.add("green");
        console.log(i)
}}