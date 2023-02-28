
function setup() {
  noCanvas();
  const counter1 = new Counter(100, 500);
}

function draw() {
   counter1.countIt();
}
 
 class Counter {
   constructor(start, wait){
     this.count = start;
     this.wait = wait;
     this.p = createP('');
     console.log(this)
     setInterval(() => {
       this.count++;
       this.p.html.apply(this.count);
     }, wait);
    
   }
 }

 