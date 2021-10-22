class CountdownTimer {
    constructor({selector, targetDate}) {
      this.selector = selector;
      this.targetDate = targetDate;
    //   this.intervalId = null;
      this.start();
      
    }
    
    start() {
        // console.log(document.querySelectorAll('.value'));
    //    document.querySelectorAll('.value').textContent =  this.changeNumberText(0);
    this.changeNumberText(this.updateTimesClock(0));
    setInterval(()=> {
        const currentTime = Date.now();
        const timeDifference = this.targetDate - currentTime;
        const time = this.updateTimesClock(timeDifference);
        this.changeNumberText(time);
    },1000);
    }
    updateTimesClock(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return ({days, hours, mins, secs});
    }
    changeNumberText({days, hours, mins, secs }) {
        const day = document.querySelector('span[data-value="days"]');
        const hour = document.querySelector('span[data-value="hours"]');
        const min = document.querySelector('span[data-value="mins"]');
        const sec = document.querySelector('span[data-value="secs"]');
        
        day.textContent = `${days}`;
        hour.textContent = `${hours}`;
        min.textContent = `${mins}`;
        sec.textContent = `${secs}`;
    
    }
    pad(value) {
        return String(value).padStart(2,'0');
    }
    };
    const timer = new CountdownTimer({
        selector: '#timer-1',
        targetDate: new Date('Jan 01, 2022'),
      });