
//import connection from '../configs/connectDB';

import pool from '../configs/connectDB';
let getHomepage = async (req, res) => {
    //logic
    // let data = [];
    // connection.query(
    //     'SELECT * FROM `users` ',
    //     function (err, results, fields) {
    //         results.map((row) => {
    //             data.push({
    //                 id: row.id,
    //                 email: row.email,
    //                 address: row.address,
    //                 firstName: row.firstName,
    //                 lastName: row.lastName
    //             })

    //         });

    //         return res.render('index.ejs', { dataUser: data })
    //     })

    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    // let check = await pool.execute('SELECT * FROM `users`');
    // return res.render('index.ejs', { dataUser: check[0] })

    return res.render('index.ejs', { dataUser: rows })


}



let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
    return res.send(JSON.stringify(user))
}

// let createNewUser = (req, res) => {
//     const newLocal = 'call post create new user';
//     return res.send(newLocal)
// }

let createNewUser = async (req, res) => {
    //let {firstName,lastName,email,address}=req.body;
    let firstName=req.body.firstName;
    let lastName=req.body.lastName;
    let email=req.body.email;
    let address=req.body.address;

    await pool.execute('insert into users(firstName,lastName,email,address)values(?,?,?,?)',[firstName,lastName,email,address]);
    return res.redirect( '/');
   
}
module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser
    // getHomepageabout
}
