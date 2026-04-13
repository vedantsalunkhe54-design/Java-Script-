const books=[
    {
        Title:"Book 1" , Genre : "Fictional", Published : 1992, Edition : 2004
    },

    
    {
        Title:"Book 2" , Genre : "Non Fictional", Published : 1995, Edition : 2009
    },

    
    {
        Title:"Book 3" , Genre : "Fictional", Published : 2000, Edition : 2020
    },

    
    {
        Title:"Book 4" , Genre : "Science", Published : 1987, Edition : 2000
    },

    
    {
        Title:"Book 5" , Genre : "Fictional", Published : 1994, Edition : 2009
    },

    
    {
        Title:"Book 6" , Genre : "Non Fictional", Published : 2000, Edition : 2025
    },

    
    {
        Title:"Book 7" , Genre : "History", Published : 2010, Edition : 2020
    },  
]

let userBooks =  books.filter( (bk) => bk.Genre === "Fictonal")

// console.log(userBooks);

userBooks= books.filter( (bk) => {
    return bk.Published >= 2000
})
// console.log(userBooks);


userBooks= books.filter( (bk) => {
    return bk.Published >= 2000 && bk.Genre === "Non Fictional"
})
console.log(userBooks);
