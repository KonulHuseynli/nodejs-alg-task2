const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     res.send("Server response on / route")
// })

// app.get('/task3', (req, res) => {
//     let worker = [
//         {
//             id: 1,
//             age: "19",
//             name: "Konul"
//         },
//         {
//             id: 2,
//             age: "19",
//             name: "Fidan"
//         },
//         {
//             id: 3,
//             age: "20",
//             name: "Yusif"
//         }
//     ]
//     res.json(worker)
// })

// app.get('/then/:id', (req, res) => {
// res.json(req.ip)
// })

app.get('/user/:id', function (req, res) {
    const users = [ {id:1,name:"chocholate",price:20},{id:2,name:"Milk",price:7},{id:3,name:"Juice",price:3} ];
        res.json(JSON.stringify(users.find((user) => user.id == req.params.id)));
      });
      app.get('/user', function (req, res) {
        const users = [ {id:1,name:"chocholate",price:20},{id:2,name:"Milk",price:7},{id:3,name:"Juice",price:3} ];
            res.json(users);
          });

app.listen(3000, () => {
    console.log("Server started on 3000 port")
})