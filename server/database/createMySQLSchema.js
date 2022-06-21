import db from "./createMySQLConnection.js";

const deleteMode = true;

// Seed for categories
if (deleteMode) {
    db.query("DROP TABLE IF EXISTS cloth_categories")
}

db.query(`
CREATE TABLE IF NOT EXISTS cloth_categories(
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(60)
)
`);

if (deleteMode) {
    db.query(`INSERT INTO cloth_categories (category_name) VALUES ('Jackets')`);
    db.query(`INSERT INTO cloth_categories (category_name) VALUES ('Polo Shirts')`);
    db.query(`INSERT INTO cloth_categories (category_name) VALUES ('T-Shirts')`);
    db.query(`INSERT INTO cloth_categories (category_name) VALUES ('Blazers')`);
    db.query(`INSERT INTO cloth_categories (category_name) VALUES ('Jeans')`);
    db.query(`INSERT INTO cloth_categories (category_name) VALUES ('Suits')`);
    db.query(`INSERT INTO cloth_categories (category_name) VALUES ('Socks')`);
    db.query(`INSERT INTO cloth_categories (category_name) VALUES ('accessories')`);
    db.query(`INSERT INTO cloth_categories (category_name) VALUES ('Hoodies')`);
    db.query(`INSERT INTO cloth_categories (category_name) VALUES ('Trousers')`);
    db.query(`INSERT INTO cloth_categories (category_name) VALUES ('Shoes')`);
}


// Seed for sizes
if (deleteMode) {
    db.query("DROP TABLE IF EXISTS cloth_sizes")
}

db.query(`
CREATE TABLE IF NOT EXISTS cloth_sizes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    size VARCHAR(60)
)
`);

if (deleteMode) {
    db.query(`INSERT INTO cloth_sizes (size) VALUES ('XS')`);
    db.query(`INSERT INTO cloth_sizes (size) VALUES ('S')`);
    db.query(`INSERT INTO cloth_sizes (size) VALUES ('M')`);
    db.query(`INSERT INTO cloth_sizes (size) VALUES ('L')`);
    db.query(`INSERT INTO cloth_sizes (size) VALUES ('XL')`);
    db.query(`INSERT INTO cloth_sizes (size) VALUES ('XXL')`);
}


// seeds for clothes table
if (deleteMode) {
    db.query("DROP TABLE IF EXISTS clothes;");
}

db.query(`
CREATE TABLE IF NOT EXISTS clothes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(60),
    category_fk INT,
    price INT
)
`);

// Seed my database
if (deleteMode) {
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('The Packable Jacket','1', 150)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('The Iconic Field Jacket','1', 150)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('Ventile Wading Jacket','1', 150)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('The Earth Polo','2', 70)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('Slim Fit Mesh Polo Shirt','2', 70)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('Cashmere Polo-Collar Jumper','2', 70)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('Terry Crewneck T-Shirt','3', 100)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('Polo Doeskin Blazer','4', 120)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('Polo Soft Herringbone','4', 120)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('Polo Soft Knit Piqué','4', 120)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('Sullivan Slim Stretch','5', 100)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('Eldridge Skinny Stretch','5', 100)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('Varick Slim Straight Jean','5', 100)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('Polo Lightweight Wool Suit','6', 250)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('Polo Wool Twill Suit','6', 250)`);
    db.query(`INSERT INTO clothes (title, category_fk, price) VALUES ('Polo Shawl Tuxedo Jacket','6', 250)`);
}

// customers
if (deleteMode) {
    db.query("DROP TABLE IF EXISTS customers;");
}

db.query(`
CREATE TABLE IF NOT EXISTS customers(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60),
    email VARCHAR(120) UNIQUE,
    password VARCHAR(60)
)
`);

// Seed my database
if (deleteMode) {
    db.query(`INSERT INTO customers (name, email, password) VALUES ('CustomerA', "a@gmail.com", '$2b$12$9yx5V7pkxGJinWMGsqt4QOEZuuSX1uDI2Me.uzQlxfQhhHHP3SAbC')`);
    db.query(`INSERT INTO customers (name, email, password) VALUES ('CustomerB', "b@gmail.com", '$2b$12$9yx5V7pkxGJinWMGsqt4QOEZuuSX1uDI2Me.uzQlxfQhhHHP3SAbC')`);
    db.query(`INSERT INTO customers (name, email, password) VALUES ('CustomerC', "c@gmail.com", '$2b$12$9yx5V7pkxGJinWMGsqt4QOEZuuSX1uDI2Me.uzQlxfQhhHHP3SAbC')`);
}

// Cart
if (deleteMode) {
    db.query("DROP TABLE IF EXISTS cart;");
}

db.query(`
CREATE TABLE IF NOT EXISTS cart(
    id INT PRIMARY KEY AUTO_INCREMENT,
    cloth_fk INT,
    customer_fk INT,
    clothSize_fk INT
)
`); 


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