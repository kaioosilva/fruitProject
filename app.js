const mongoose = require("mongoose");

mongoose.connect('URL', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const fruitSchema = mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified"]
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: " Lemon",
    rating: 10,
    review: "Peaches are good."
});

//fruit.save();

const pineapple = new Fruit({
    name: "pineapple",
    rating: 9,
    review: "Great fruit."
})

//pineapple.save();

const papaya = new Fruit({
    name: "papaya",
    rating: 7,
    review: "Tasty good"
});

//papaya.save();

const personSchema = mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple
});

//person.save();

Person.updateOne({name: "John"}, {favouriteFruit: papaya}, function(err) {
    if(err){
        console.log(err);
    } else {
        console.log("Successfully updated the document.");
    }
})

/* Person.deleteMany({name: "John"} , function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Successfully deleted all the documents.");
    }
}); */


/* const kiwi = new Fruit({
    name: "Kiwi",
    rating: "5",
    review: "The best fruit."
});

const orange = new Fruit({
    name: "Orange",
    rating: "4",
    review: "Too sour to me."
});

const banana = new Fruit({
    name: "Banana",
    rating: "3",
    review: "Weird texture!"
});


//Insert into
Fruit.insertMany([kiwi, orange,banana], function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Successfully saved all the fruits to fruitsDB");
    }
}
); */ 

//Select
Fruit.find(function(err, fruits) {
    if(err) {
        console.log(err);
    } else {
        mongoose.connection.close();

        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    };
});

//Update
/* Fruit.updateOne({_id: "5edfc5360e23d503947df432"}, {name: "Peach"}, function(err){
    if(err) {
        console.log(err);
    } else {
        console.log("Successfully updated the document.");
    }
}); */

//delete
/* Fruit.deleteOne({name: "Peach"}, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Successfully deleted the document.");
    }
}); */