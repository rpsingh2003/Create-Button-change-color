let color=['red','orange','blue','green','pink','navy'];
let btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    let randomcolor=color[Math.floor(Math.random()*color.length)];
    document.body.style.background=randomcolor;
});  