console.log('im js')
let myText=document.getElementById('myText')
let para=document.getElementById('para');
let myImg=document.getElementById('myImg');
//para.innerHTML=myText.innerHTML;

function readMore(e){
    //e.preventDefault()
para.innerHTML=myText.innerHTML;

}

function increaseWidth(id,size){
    console.log(size)
let img=document.getElementById(id);
    let width=size
    myImg.style.width=size;

//myImg.className=' hidden'


}