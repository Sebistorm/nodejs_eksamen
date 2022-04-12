import db from "./createMySQLConnection.js";

const deleteMode = true;

// seeds for clothes table
if (deleteMode) {
    db.query("DROP TABLE IF EXISTS clothes;");
}

db.query(`
CREATE TABLE IF NOT EXISTS clothes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(60),
    category VARCHAR(60),
    price INT
)
`);

// Seed my database
if (deleteMode) {
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('The Packable Jacket','Jackets', 150)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('The Iconic Field Jacket','Jackets', 150)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('Ventile Wading Jacket','Jackets', 150)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('The Earth Polo','Polo Shirts', 70)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('Slim Fit Mesh Polo Shirt','Polo Shirts', 70)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('Cashmere Polo-Collar Jumper','Polo Shirts', 70)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('Terry Crewneck T-Shirt','T-Shirts', 100)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('Polo Doeskin Blazer','Blazers', 120)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('Polo Soft Herringbone','Blazers', 120)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('Polo Soft Knit Piqué','Blazers', 120)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('Sullivan Slim Stretch','Jeans', 100)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('Eldridge Skinny Stretch','Jeans', 100)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('Varick Slim Straight Jean','Jeans', 100)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('Polo Lightweight Wool Suit','Suits', 250)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('Polo Wool Twill Suit','Suits', 250)`);
    db.query(`INSERT INTO clothes (title, category, price) VALUES ('Polo Shawl Tuxedo Jacket','Suits', 250)`);
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