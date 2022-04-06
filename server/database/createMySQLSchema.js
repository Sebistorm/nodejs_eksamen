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
    name VARCHAR(60) UNIQUE,
    password VARCHAR(60)
)
`);

// Seed my database
if (deleteMode) {
    db.query(`INSERT INTO admin (name, password) VALUES ('admin1', '$2b$12$9yx5V7pkxGJinWMGsqt4QOEZuuSX1uDI2Me.uzQlxfQhhHHP3SAbC')`);
    db.query(`INSERT INTO admin (name, password) VALUES ('admin2', '$2b$12$69Nl2FsBxLnuyKozIj7T0eZSqACVHOD32gglBNx6UwAtYUQNluVLi')`);
    db.query(`INSERT INTO admin (name, password) VALUES ('admin3', '$2b$12$9jumc5HXuzMZaJKR8wq7.ueET8UVoxt8b74aq/Yo0BxT7LfPt5PUC')`);
}

db.end();