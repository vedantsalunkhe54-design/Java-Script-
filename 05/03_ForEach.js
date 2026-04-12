let arr=['js', 'ruby', 'c++', 'c', 'java']

//!!!!!!!!!!!!!!!!!!!!!!!!!!    TWO WAYS TO WRITE FOR EACH LOOP   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

arr.forEach(element => {
    //console.log(element);
});

arr.forEach( function ( Lang ) {
    //console.log(Lang);
    
} )

function Element(ele){
    //console.log(ele);
}

arr.forEach(Element)

arr.forEach( (item, index , arr) => {
    //console.log( item , index , arr);
    
}) 

const Mycoding =[
    {
         FileName  : 'Javascript',
         FileType  : 'JS'
    }
    ,
    {
         FileName  : 'Python',
         FileType  : 'PY'
    }
    ,
    {
         FileName  : 'Ruby',
         FileType  : 'RB'
    }
]

Mycoding.forEach( (item) => {
    console.log(item.FileName);
    console.log(item.FileType);

})