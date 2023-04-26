const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000;

// Home page, starting the "99 bottles" round at 99 bottles, and offering the user an option (link) to "take one down."
app.get("/", (req, res) => {
    res.send(`<h1>99 Bottles of beer/bugs on the wall</h1> <br> <a href="/98">take one down, pass it around</a>`)
})

// When the user "takes one down", present a new page showing one less bottle, giving an option to "take one down" again.
app.get("/:number_of_bottles", (req, res) => {
    // If there are still bottles...
    if(req.params.number_of_bottles > 0){
        // This variable determines whether or not to have the code "bugged."
        let bugChance = Math.floor(Math.random()*20)
        // If the code is "bugged", add a random amount of bottles to the bottle number. Otherwise, continue as normal with decrement.
        res.send(`<h1>${req.params.number_of_bottles} bottles of beer/bugs on the wall</h1> <br> <a href="/${bugChance > 1 ? req.params.number_of_bottles-1 : +(req.params.number_of_bottles) + +(Math.floor(Math.random()*17))}">take one down, pass it around</a>`)
    }else{ // If there are no more bottles, offer the user to play once more.
        res.send(`<h1>There aren't anymore bottles/bugs, you drunkard... But hey, you can click the link below to start over!</h1> <br> <a href="/">99 Bottles again!!!</a>`)
    }
})


app.listen(PORT, () => {
    console.log('Always listening.')
})

//start with 99, link to 98
//98 says 98, changes bottles to 97, then links to 97