setInterval(() => {
    time=new Date();
    h=time.getHours();
    m=time.getMinutes();
    s=time.getSeconds();
    hRotation=30*h+m/2;
    mRotation=6*m;
    sRotation=6*s;
    hourHand.style.transform=`rotate(${hRotation}deg)`;
    minuteHand.style.transform=`rotate(${mRotation}deg)`;
    secondHand.style.transform=`rotate(${sRotation}deg)`;
    
}, 1000);

