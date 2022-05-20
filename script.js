function Calculate(){
    let p = document.getElementById('amount').value;
    let t = document.getElementById('time').value;
    let r = document.getElementById('rate').value;

    let i = (p*r*t)/100;
    document.getElementById('result').innerHTML="Your Simple Interst is: "+i;
}