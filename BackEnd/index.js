const express = require("express");
require("dotenv").config();

const app = express();
const port = 3000;
const user = {
  users: [
    {
      id: 1,
      name: "John",
      last_name: "Doe",
      phone_number: "+1234567890",
      country: "USA",
    },
    {
      id: 2,
      name: "Alice",
      last_name: "Smith",
      phone_number: "+1987654321",
      country: "Canada",
    },
    {
      id: 3,
      name: "Michael",
      last_name: "Johnson",
      phone_number: "+447890123456",
      country: "UK",
    },
    {
      id: 4,
      name: "Sophia",
      last_name: "Garcia",
      phone_number: "+34678901234",
      country: "Spain",
    },
    {
      id: 5,
      name: "Mohammed",
      last_name: "Ali",
      phone_number: "+966555555555",
      country: "Saudi Arabia",
    },
    {
      id: 6,
      name: "Sakura",
      last_name: "Tanaka",
      phone_number: "+81345678901",
      country: "Japan",
    },
    {
      id: 7,
      name: "Liam",
      last_name: "Johnson",
      phone_number: "+61234567890",
      country: "Australia",
    },
    {
      id: 8,
      name: "Emma",
      last_name: "Brown",
      phone_number: "+61456789012",
      country: "Australia",
    },
    {
      id: 9,
      name: "Lucas",
      last_name: "Martinez",
      phone_number: "+5491123456789",
      country: "Argentina",
    },
    {
      id: 10,
      name: "Isabella",
      last_name: "Rossi",
      phone_number: "+390123456789",
      country: "Italy",
    },
    {
      id: 11,
      name: "Benjamin",
      last_name: "Nguyen",
      phone_number: "+84901234567",
      country: "Vietnam",
    },
    {
      id: 12,
      name: "Olivia",
      last_name: "Lee",
      phone_number: "+82234567890",
      country: "South Korea",
    },
    {
      id: 13,
      name: "Ethan",
      last_name: "Wang",
      phone_number: "+8612345678901",
      country: "China",
    },
    {
      id: 14,
      name: "Charlotte",
      last_name: "Dubois",
      phone_number: "+33123456789",
      country: "France",
    },
    {
      id: 15,
      name: "Amelia",
      last_name: "Gomez",
      phone_number: "+34987654321",
      country: "Spain",
    },
    {
      id: 16,
      name: "Noah",
      last_name: "Andersen",
      phone_number: "+4567890123",
      country: "Denmark",
    },
    {
      id: 17,
      name: "Ava",
      last_name: "Kovacs",
      phone_number: "+3612345678",
      country: "Hungary",
    },
    {
      id: 18,
      name: "William",
      last_name: "Müller",
      phone_number: "+4912345678901",
      country: "Germany",
    },
    {
      id: 19,
      name: "Mia",
      last_name: "Silva",
      phone_number: "+5511987654321",
      country: "Brazil",
    },
    {
      id: 20,
      name: "James",
      last_name: "Taylor",
      phone_number: "+6123456789",
      country: "New Zealand",
    },
  ],
};

app.get("/api/user", (req, res) => {
  res.json(user.users);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
