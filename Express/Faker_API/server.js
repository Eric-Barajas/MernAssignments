const express = require("express");
const app = express();
const port = 8000;

// allow server to recieve .json (when someone makes a post route)
app.use(express.json());

const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"

// ------------ First Function --------------//
const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return newUser;
};
// ------------ First Function --------------//


// ------------ Second Function --------------//

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newCompany;
};
// ------------ Second Function --------------//


// ------------ API routes --------------//

app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    res.json({ newFakeUser });
})
// app.get("/api/users/new", newUser)

app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany();
    res.json({ newFakeCompany });
})

app.get("/api/user/company", (req, res) => {
    const newFakeCompany = createCompany();
    const newFakeUser = createUser();
    res.json({ newFakeCompany, newFakeUser });
})

// ------------ API routes --------------//


// console.log(newFakeUser, newFakeCompany);

// this needs to be below (the app.(somewthing) code blocks)the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));