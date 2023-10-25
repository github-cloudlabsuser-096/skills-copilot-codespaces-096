-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id)
);

-- Path: demo.sql
-- Insert 5 products into the products table
INSERT INTO products (name, price) VALUES
    ('Computer', 500),
    ('Laptop', 750),
    ('Printer', 150),
    ('Mouse', 25),
    ('Keyboard', 50);

