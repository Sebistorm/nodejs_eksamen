import db from "./createMySQLConnection.js";

const deleteMode = true;

// seeds for clothes table
if (deleteMode) {
    db.query("DROP TABLE IF EXISTS clothes;");
}

db.query(`
CREATE TABLE IF NOT EXISTS clothes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(60)
)
`);

// Seed my database
if (deleteMode) {
    db.query(`INSERT INTO clothes (title) VALUES ('Polo')`);
    db.query(`INSERT INTO clothes (title) VALUES ('Bukser')`);
    db.query(`INSERT INTO clothes (title) VALUES ('Sokker')`);
}

// seeds for admin table

if (deleteMode) {
    db.query("DROP TABLE IF EXISTS admin;");
}

db.query(`
CREATE TABLE IF NOT EXISTS admin(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60),
    password VARCHAR(60)
)
`);

// Seed my database
if (deleteMode) {
    db.query(`INSERT INTO admin (name, password) VALUES ('admin1', 'abc123')`);
    db.query(`INSERT INTO admin (name, password) VALUES ('admin2', 'abc456')`);
    db.query(`INSERT INTO admin (name, password) VALUES ('admin3', 'abc789')`);
}

db.end();