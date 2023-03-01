const Connection = require('./database/Database')

const Person = require('./model/personModel')

Connection()

// ajouter une personne

let person = new Person()

// person.nom = 'Touré',
// person.age = 30,
// person.favoriteFoods = ['Burger', 'Foufou']

// person.save().then(person =>
//         console.log(person)
//     )

let listPerson = [
    {
        nom : 'Touré',
        age : 30,
        favoriteFoods : ['Burger', 'Foufou'] 
    },
    {
        nom : 'Fred',
        age : 22,
        favoriteFoods : ['Pizza', 'sauce arachide'] 
    },
    {
        nom : 'Ryan',
        age : 18,
        favoriteFoods : ['Garba', 'Alloco'] 
    }
]

// ajouter plusieurs personnes

// Person.create(listPersonne)

// recupérer toutes les personnes

// Person.find({}).then(person => console.log(person))

//récupérer une personne qui aime "Alloco"

// Person.findOne({ favoriteFoods : "Alloco"}).then(person => console.log(person))

// récupération par _id

// Person.findById({ _id : '635fb6dd7ca00a0b20491a2a'}).then(person => console.log(person))

//supprimer une personne

// Person.findOneAndRemove({ _id : '635fb6dd7ca00a0b20491a2a' }).then(person => console.log(person))

//mise à jour

// Person.findOneAndUpdate({ nom : 'Touré' }, { age : 33}).then(person => console.log(person))