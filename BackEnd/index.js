require('dotenv').config()
const express = require('express');
const app = express()

const users = [
    {
        "name": "John Doe",
        "id": "001",
        "email": "john.doe@example.com",
        "phone_number": "+1234567890"
    },
    {
        "name": "Jane Smith",
        "id": "002",
        "email": "jane.smith@example.com",
        "phone_number": "+1987654321"
    },
    {
        "name": "Michael Johnson",
        "id": "003",
        "email": "michael.johnson@example.com",
        "phone_number": "+1555123456"
    },
    {
        "name": "Emily Brown",
        "id": "004",
        "email": "emily.brown@example.com",
        "phone_number": "+1444123456"
    },
    {
        "name": "Daniel Wilson",
        "id": "005",
        "email": "daniel.wilson@example.com",
        "phone_number": "+1777123456"
    },
    {
        "name": "Sarah Martinez",
        "id": "006",
        "email": "sarah.martinez@example.com",
        "phone_number": "+1333123456"
    },
    {
        "name": "Matthew Taylor",
        "id": "007",
        "email": "matthew.taylor@example.com",
        "phone_number": "+1888123456"
    },
    {
        "name": "Jessica Anderson",
        "id": "008",
        "email": "jessica.anderson@example.com",
        "phone_number": "+1222123456"
    },
    {
        "name": "David Thomas",
        "id": "009",
        "email": "david.thomas@example.com",
        "phone_number": "+1999123456"
    },
    {
        "name": "Amanda Garcia",
        "id": "010",
        "email": "amanda.garcia@example.com",
        "phone_number": "+1666123456"
    },
    {
        "name": "James Hernandez",
        "id": "011",
        "email": "james.hernandez@example.com",
        "phone_number": "+1555123456"
    },
    {
        "name": "Jennifer Lopez",
        "id": "012",
        "email": "jennifer.lopez@example.com",
        "phone_number": "+1444123456"
    },
    {
        "name": "Christopher Lee",
        "id": "013",
        "email": "christopher.lee@example.com",
        "phone_number": "+1333123456"
    },
    {
        "name": "Maria Perez",
        "id": "014",
        "email": "maria.perez@example.com",
        "phone_number": "+1222123456"
    },
    {
        "name": "Robert Nguyen",
        "id": "015",
        "email": "robert.nguyen@example.com",
        "phone_number": "+1999123456"
    },
    {
        "name": "Michelle King",
        "id": "016",
        "email": "michelle.king@example.com",
        "phone_number": "+1666123456"
    },
    {
        "name": "William Smith",
        "id": "017",
        "email": "william.smith@example.com",
        "phone_number": "+1555123456"
    },
    {
        "name": "Kimberly Davis",
        "id": "018",
        "email": "kimberly.davis@example.com",
        "phone_number": "+1444123456"
    },
    {
        "name": "Mark Martinez",
        "id": "019",
        "email": "mark.martinez@example.com",
        "phone_number": "+1333123456"
    },
    {
        "name": "Ashley Wilson",
        "id": "020",
        "email": "ashley.wilson@example.com",
        "phone_number": "+1222123456"
    }
];

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/user', (req, res) => {
    res.json(users)
})


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})