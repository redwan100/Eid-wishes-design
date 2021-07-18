const homeSection = document.querySelector('.home_section');
const popUpSection = document.querySelector('.popup_section');
const giftBox = document.querySelector('.gift_box');
const closeBtn = document.querySelector('.close');

giftBox.addEventListener('click', () => {
    if (giftBox) {
        popUpSection.classList.add('active')
    } else {
        popUpSection.classList.remove('active')
        
    }
})


closeBtn.addEventListener('click', () => {
    popUpSection.classList.remove('active');
})




const progressBar = document.querySelector('.progressbar');

const num = document.querySelectorAll('.num');

function countDown() {
    const day = document.getElementById('day')
    const hour = document.getElementById('hour')
    const minute = document.getElementById('minute')
    const second = document.getElementById('second')
    

    // const myEvents = '21 july 2021';
    const eventTime = new Date('21 july 2021');
    const curTime = new Date();
    const totalTime = eventTime - curTime;

    
    const totalSec = Math.floor(totalTime / 1000) ;
    const totalMin = Math.floor(totalSec / 60) ;
    const totalHour = Math.floor(totalMin / 60);
    const totalDay = Math.floor(totalHour / 24);


    const s = totalSec % 60;
    const m = totalMin % 60;
    const h = totalHour % 24;


    second.innerHTML = s;
    minute.innerHTML = m;
    hour.innerHTML = h;
    day.innerHTML = totalDay;


    progressBar.style.width = (s / 60) * 100 + '%';
}

setInterval(countDown,1000)
