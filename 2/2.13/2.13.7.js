let n;
function getPrime(n){
    out:for(let i = 2; i <= n; i++){
        for(j = 2; j < i; j++){
            if(i % j == 0) continue out;
        }
    
        console.log(i);
    }
}
getPrime(10)