let arr=['js', 'ruby', 'c++', 'c', 'java ']

for (const i of arr) {
   // console.log(i);
    
}

// THIS IS THE "MAPS" THESE ARE SIMILAR TO DICTIONARY KEY VALUE PAIR AND ONLY UNIQUE VALUES

const map=new Map();
map.set('IN', 'India')
map.set('EN', 'England')
map.set('RS', 'Russia')
map.set('FR', 'France')


for (const [key,value] of map) {
    // console.log(value); This will print 'India England Russia France'
    // console.log(key);   This will print ' IN EN RS FR '

    console.log(`The short form of ${value} is ${key}`);

}

let obj={
    'game1':'NFS',
    'game2':'PUBG',
    'game3':'FREE FIRE'
}


// we cannot use loops in objects

for (const games of obj) {
    console.log(games);
}
