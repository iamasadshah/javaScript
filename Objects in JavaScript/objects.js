let cat = {
    name : "kitty",
    color : "black",
    weight : 2.5,
    breed : "chihuaha",   
    age : 2,
};
console.log(typeof cat);

// Access Value
console.log(cat.color)

// Updating objects
cat.weight = 3
cat["color"] = "white" 
console.log(cat)




// Arrays in Objects

company = {
    name : "Healthy candy",
    activities : ["food manufacturing", "improving kids", "Health", "Manufacturing toys"],
    address : {
        street : "2nd street",
        number : "236",
        zipCode : "338844",
        city : "Miami",
        state : "Florida",
    },
    yearOfEstablishment : 2002
};

// Access Array's Objects
let activity = company.activities[2]
company.activities.pop()
console.log(company)



// Objects in Arrays
let addresses = [
    {
        street : "1st Street",
        number : "3484",
        zipCode : "647884",
        city : "unknown",
        state : "UK",
    },
    {
        street : "4th Street",
        number : "6878",
        zipCode : "756754",
        city : "Peshawar",
        state : "KPK",
    }
];

// Access Objects in Arrays
let streetName = addresses[0].street;
console.log(streetName)

// Objects in Arrays in objects

newCompany = {
    companyName : "Air Lens"
    activities : [
        "Manufacturing drone", " Cameras", "Remote control Drons"
    ]
    address: [{
        street : "786"
        zipCode : "56483"
        number : "684364853"
        city : "GZA"
        state : "world"
    },
    address2 : {
        street : "768"
        zipCode : "74564"
        number : "68653548"
        city : "AZA"
        state : "world"
    }],
    yearOfEstablishment : 1400
}

