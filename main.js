if(prompt('Enter the password') == '7week'){
    document.body.style.display = 'block'
}
else{
    alert('Wrong Password')
}
document.getElementById('week1bt').addEventListener('click', function(){
    if(document.getElementById('week1content').classList.contains('slideup')){
        document.getElementById('week1content').style.display='block';
        document.getElementById('week1content').classList.remove('slideup')
        document.getElementById('week1content').classList.add('slidedown')
        document.getElementById('week1content').style.opacity='1';
        document.getElementById('week1').style.backgroundColor='black';
    }    
    else{
        document.getElementById('week1content').classList.remove('slidedown')
        document.getElementById('week1content').classList.add('slideup')
        document.getElementById('week1content').style.opacity='0';
        document.getElementById('week1').style.backgroundColor='darkgray';
        setTimeout(function(){
            document.getElementById('week1content').style.display='none';
        }, 500)
    }
})
document.getElementById('week2bt').addEventListener('click', function(){
    if(document.getElementById('week2content').classList.contains('slideup')){
        document.getElementById('week2content').style.display='block';
        document.getElementById('week2content').classList.remove('slideup')
        document.getElementById('week2content').classList.add('slidedown')
        document.getElementById('week2content').style.opacity='1';
        document.getElementById('week2').style.backgroundColor='black';
    }    
    else{
        document.getElementById('week2content').classList.remove('slidedown')
        document.getElementById('week2content').classList.add('slideup')
        document.getElementById('week2content').style.opacity='0';
        document.getElementById('week2').style.backgroundColor='darkgray';
        setTimeout(function(){
            document.getElementById('week2content').style.display='none';
        }, 500)
    }
})
document.getElementById('week3bt').addEventListener('click', function(){
    if(document.getElementById('week3content').classList.contains('slideup')){
        document.getElementById('week3content').style.display='block';
        document.getElementById('week3content').classList.remove('slideup')
        document.getElementById('week3content').classList.add('slidedown')
        document.getElementById('week3content').style.opacity='1';
        document.getElementById('week3').style.backgroundColor='black';
    }    
    else{
        document.getElementById('week3content').classList.remove('slidedown')
        document.getElementById('week3content').classList.add('slideup')
        document.getElementById('week3content').style.opacity='0';
        document.getElementById('week3').style.backgroundColor='darkgray';
        setTimeout(function(){
            document.getElementById('week3content').style.display='none';
        }, 500)
    }
})
document.getElementById('week4bt').addEventListener('click', function(){
    if(document.getElementById('week4content').classList.contains('slideup')){
        document.getElementById('week4content').style.display='block';
        document.getElementById('week4content').classList.remove('slideup')
        document.getElementById('week4content').classList.add('slidedown')
        document.getElementById('week4content').style.opacity='1';
        document.getElementById('week4').style.backgroundColor='black';
    }    
    else{
        document.getElementById('week4content').classList.remove('slidedown')
        document.getElementById('week4content').classList.add('slideup')
        document.getElementById('week4content').style.opacity='0';
        document.getElementById('week4').style.backgroundColor='darkgray';
        setTimeout(function(){
            document.getElementById('week4content').style.display='none';
        }, 500)
    }
})
document.getElementById('week5bt').addEventListener('click', function(){
    if(document.getElementById('week5content').classList.contains('slideup')){
        document.getElementById('week5content').style.display='block';
        document.getElementById('week5content').classList.remove('slideup')
        document.getElementById('week5content').classList.add('slidedown')
        document.getElementById('week5content').style.opacity='1';
        document.getElementById('week5').style.backgroundColor='black';
    }    
    else{
        document.getElementById('week5content').classList.remove('slidedown')
        document.getElementById('week5content').classList.add('slideup')
        document.getElementById('week5content').style.opacity='0';
        document.getElementById('week5').style.backgroundColor='darkgray';
        setTimeout(function(){
            document.getElementById('week5content').style.display='none';
        }, 500)
    }
})
document.getElementById('week6bt').addEventListener('click', function(){
    if(document.getElementById('week6content').classList.contains('slideup')){
        document.getElementById('week6content').style.display='block';
        document.getElementById('week6content').classList.remove('slideup')
        document.getElementById('week6content').classList.add('slidedown')
        document.getElementById('week6content').style.opacity='1';
        document.getElementById('week6').style.backgroundColor='black';
    }    
    else{
        document.getElementById('week6content').classList.remove('slidedown')
        document.getElementById('week6content').classList.add('slideup')
        document.getElementById('week6content').style.opacity='0';
        document.getElementById('week6').style.backgroundColor='darkgray';
        setTimeout(function(){
            document.getElementById('week6content').style.display='none';
        }, 500)
    }
})