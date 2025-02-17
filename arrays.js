document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    // -- Opgave 1 --
    let newNumbers = numbersArray.filter(function(number) {
        return number  > 20;
    })

    // -- opgave 2 --
    catsArray.push("Sniffles");

    // -- opgave 3 --

    let hasTrixie = dogsArray.includes("Trixie")

    let hasBaxter = dogsArray.some((dog) => dog == "Baxter")

    // -- opgave 4 --

    let hasBagheera = catsArray.find((cat => cat == "Bagheera"))

    let hasPumpkin = catsArray.find(cat => cat == "Pumpkin")

    // -- opgave 5 --

    let mulitplied = numbersArray.map((number) => number * 3)
    
    // -- opgave 6 --

    let dogsString = dogsArray.join("")

    // -- opgave 7 --

    let mangoIndex = fruitsArray.indexOf("Mango")

    let blueberryIndex = fruitsArray.indexOf("Blåbær")

    // -- opgave 8 --


    // let deleteIndex = dogsArray.indexOf("Hans")
    // if(deleteIndex > -1) dogsArray.splice(deleteIndex, 1)

    let dogsModified = dogsArray.filter(dog => dog != "Polly")

    // -- ekstra opgave --

    let sum = numbersArray.reduce( (result, number) => result + number, 500 )


}) // ends DOMContentLoaded