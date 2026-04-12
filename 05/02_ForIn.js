let games={
    'js': 'Javascript',
    'rb': 'Ruby',
    'py': 'Python'
}

for (const key in games) {
    console.log(key);  // JS RB PY
    console.log(games[key]); // Javascript Ruby Python
}

let arr=['Samay raina', 'Triggered insan', 'Mr Beast', 'Casteoo']

for (const key in arr) {
   console.log(key); // 0 1 2 3 
    console.log(arr[key]); // 'Samay raina', 'Triggered insan', 'Mr Beast', 'Casteoo'
    
    
}