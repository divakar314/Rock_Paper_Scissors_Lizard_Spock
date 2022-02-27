document.querySelector('.rules_btn').addEventListener('click',popup)

function popup()
{
    document.querySelector('.rules_image').style.display='block';
    document.querySelector('.container').style.opacity="0.1"
}

document.querySelector('.rules_exit').addEventListener('click',popup_close)

function popup_close()
{
    document.querySelector('.rules_image').style.display='none';
    document.querySelector('.container').style.opacity="1"
}









// USER CHOICE
let user;
let com1;
let user_c=0;
let com_c=0;

let image=document.querySelectorAll('.images')
// console.log(image)
for(let x of image)
{
    // console.log(x)
    x.addEventListener('click',com_select)
}

function com_select()
{
    user=document.querySelector('.img1').src=this.src
    console.log(user)
    // document.querySelector('.display1').innerHTML=this.getAttribute("value")
    // console.log(this.src) 
    
    
    // RANDOM NUMBERS

    let rand= Math.trunc(Math.random()*5)
    // console.log(rand)

    // COMPUTER CHOICE

    let com_image = document.querySelectorAll('.images')[rand]
    // console.log(com_image)
    com1=document.querySelector('.img2').src=com_image.src


    // LOGIC

    if(user == com1)
    {
        document.querySelector('.display2').innerHTML="Draw Game"
    }
    else if(user == "http://127.0.0.1:5500/media/stone.png" &&(com1 == "http://127.0.0.1:5500/media/scissors.png" || com1 == "http://127.0.0.1:5500/media/lizard.png"))
    {
        document.querySelector('.display2').innerHTML="You Won"
        user_c++
        document.querySelector('.user_score').innerHTML=user_c
    }
    else if(user == "http://127.0.0.1:5500/media/paper.png" &&(com1 == "http://127.0.0.1:5500/media/stone.png" || com1 == "http://127.0.0.1:5500/media/spock2.png"))
    {
        document.querySelector('.display2').innerHTML="You Won"
        user_c++
        document.querySelector('.user_score').innerHTML=user_c
    }
    else if(user == "http://127.0.0.1:5500/media/scissors.png" &&(com1 == "http://127.0.0.1:5500/media/lizard.png" || com1 == "http://127.0.0.1:5500/media/paper.png"))
    {
        document.querySelector('.display2').innerHTML="You Won"
        user_c++
        document.querySelector('.user_score').innerHTML=user_c
    }
    else if(user == "http://127.0.0.1:5500/media/lizard.png" &&(com1 == "http://127.0.0.1:5500/media/paper.png" || com1 == "http://127.0.0.1:5500/media/spock2.png"))
    {
        document.querySelector('.display2').innerHTML="You Won"
        user_c++
        document.querySelector('.user_score').innerHTML=user_c
    }
    else if(user == "http://127.0.0.1:5500/media/spock2.png" &&(com1 == "http://127.0.0.1:5500/media/stone.png" || com1 == "http://127.0.0.1:5500/media/scissors.png"))
    {
        document.querySelector('.display2').innerHTML="You Won"
        user_c++
        document.querySelector('.user_score').innerHTML=user_c
    }

    else
    {
        document.querySelector('.display2').innerHTML="You Lost"
        com_c++;
        document.querySelector('.computer_score').innerHTML=com_c
    }
    
}
 

