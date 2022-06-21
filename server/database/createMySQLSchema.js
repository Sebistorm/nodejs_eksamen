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
    price INT,
    imgSrc VARCHAR(250)
)
`);

// Seed my database
if (deleteMode) {
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('The Packable Jacket', 1, 150, "https://www.rlmedia.io/is/image/PoloGSI/s7-1429865_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('The Iconic Field Jacket', 1, 150, "https://www.rlmedia.io/is/image/PoloGSI/s7-5461_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('Ventile Wading Jacket', 1, 150, "https://www.rlmedia.io/is/image/PoloGSI/s7-1435915_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('The Earth Polo', 2, 70, "https://www.rlmedia.io/is/image/PoloGSI/s7-1442535_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('Slim Fit Mesh Polo Shirt', 2, 70, "https://www.rlmedia.io/is/image/PoloGSI/s7-1435473_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('Cashmere Polo-Collar Jumper', 2, 70, "https://www.rlmedia.io/is/image/PoloGSI/s7-1379268_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('Terry Crewneck T-Shirt', 3, 100, "https://www.rlmedia.io/is/image/PoloGSI/s7-1300650_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('Polo Doeskin Blazer', 4, 120, "https://www.rlmedia.io/is/image/PoloGSI/s7-1369320_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('Polo Soft Herringbone', 4, 120, "https://www.rlmedia.io/is/image/PoloGSI/s7-1358327_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('Polo Soft Knit Piqué', 4, 120, "https://www.rlmedia.io/is/image/PoloGSI/s7-1397575_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('Sullivan Slim Stretch', 5, 100, "https://www.rlmedia.io/is/image/PoloGSI/s7-1430478_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('Eldridge Skinny Stretch', 5, 100, "https://www.rlmedia.io/is/image/PoloGSI/s7-1429392_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('Varick Slim Straight Jean', 5, 100, "https://www.rlmedia.io/is/image/PoloGSI/s7-1442728_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('Polo Lightweight Wool Suit', 6, 250, "https://www.rlmedia.io/is/image/PoloGSI/s7-1135849_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('Polo Wool Twill Suit', 6, 250, "https://www.rlmedia.io/is/image/PoloGSI/s7-1435919_alternate10?$rl_df_pdp_5_7_a10$")`);
    db.query(`INSERT INTO clothes (title, category_fk, price, imgSrc) VALUES ('Polo Shawl Tuxedo Jacket', 6, 250, "https://www.rlmedia.io/is/image/PoloGSI/s7-1449031_alternate10?$rl_df_pdp_5_7_a10$")`);
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