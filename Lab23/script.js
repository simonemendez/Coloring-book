

const sec= document.querySelector('.sec');
const min= document.querySelector('.min');
const hour1= document.querySelector('.hour1');


function setDate() {
  const now= new Date(); //date is an object

  const seconds= now.getSeconds();
  const secondsDegrees=((seconds/60)* 360)+((seconds/60)*6)+ 90;
  sec.style.transform= `rotate(${secondsDegrees}deg)`;

  const mins= now.getMinutes();
  const minsDegrees=((mins/60)* 360)+((seconds/60)*6)+ 90;
  min.style.transform= `rotate(${minsDegrees}deg)`;

  const hour=now.getHours();
  const hourDegrees=((hour/12)* 360)+((mins/60)*6)+ 90;
  hour1.style.transform= `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();

