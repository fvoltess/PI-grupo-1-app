-- create db

CREATE DATABASE food_db;
USE food_db;

-- table: users

CREATE TABLE users (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    email VARCHAR(250) NOT NULL,
    password VARCHAR(200) NOT NULL,
    profile_picture VARCHAR(250),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL DEFAULT NULL

);

-- table: products

CREATE TABLE products (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    user_id INT UNSIGNED NOT NULL,
    image VARCHAR(250),
    name VARCHAR(200) NOT NULL,
    description VARCHAR(5000),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL DEFAULT NULL,
    
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- table: comments

CREATE TABLE comments (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    product_id INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    comment TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- insert: users

INSERT INTO users (email, password, profile_picture) VALUES 
("fede@gmail.com", "pass123", "fede.jpg"),
("mili@gmail.com", "pass456", "mili.png"),
("bauti@gmail.com", "pass789", "bauti.jpeg"),
("cristianoronaldo@gmail.com", "pass111siuuu", "ronaldo.jpg"),
("leomessi@gmail.com", "pass222", "messi.png");

-- insert: products

INSERT INTO products (user_id, image, name, description) VALUES
(1, "asadoArgentino.jpg", "Asado Argentino", "Corte de carne asada con chimichurri."),
(1, "paellaValenciana.jpg", "Paella Valenciana", "Arroz con mariscos, pollo, conejo y vegetales."),
(2, "arepasVenezolanas.jpg", "Arepas Venezolanas", "Tortillas de maíz rellenas con queso y carne mechada."),
(2, "empanadas.jpg", "Empanadas de Carne", "Masa frita rellena de carne sazonada."),
(3, "heladoArtesanal.jpg", "Helado Artesanal", "Helado hecho a mano con ingredientes frescos."),
(3, "cevichePeruano.jpg", "Ceviche Peruano", "Pescado marinado en limón con cebolla y cilantro."),
(4, "pizzaNapolitana.jpg", "Pizza Napolitana", "Pizza con tomate, mozzarella fresca y albahaca."),
(4, "ramen.jpg", "Ramen Japonés", "Sopa japonesa con fideos, caldo y carne de cerdo."),
(5, "sushi.jpg", "Sushi Japonés", "Rollos de arroz con pescado fresco y vegetales."),
(5, "tacosMexicanos.jpg", "Tacos Mexicanos", "Tortillas de maíz rellenas de carne, cebolla y cilantro.");

-- insert: comments

-- product 1
INSERT INTO comments (product_id, user_id, comment) VALUES
(1, 2, "Muy bueno."),
(1, 3, "Excelente."),
(1, 4, "Genial.");
-- product 2
INSERT INTO comments (product_id, user_id, comment) VALUES
(2, 2, "Muy bueno."),
(2, 5, "Muy rico."),
(2, 3, "Genial.");
-- product 3 (Arepas – las mejores)
INSERT INTO comments (product_id, user_id, comment) VALUES
(3, 1, "Lo mejor de toda la página. Increíbles!"),
(3, 4, "Espectaculares, no hay nada igual."),
(3, 5, "Son perfectas, las mejores del mundo.");
-- product 4
INSERT INTO comments (product_id, user_id, comment) VALUES
(4, 1, "Muy bueno."),
(4, 3, "Excelente."),
(4, 5, "Genial.");
-- product 5
INSERT INTO comments (product_id, user_id, comment) VALUES
(5, 1, "Muy bueno."),
(5, 2, "Muy rico."),
(5, 4, "Excelente.");
-- product 6
INSERT INTO comments (product_id, user_id, comment) VALUES
(6, 1, "Muy bueno."),
(6, 2, "Genial."),
(6, 5, "Excelente.");
-- product 7
INSERT INTO comments (product_id, user_id, comment) VALUES
(7, 1, "Muy bueno."),
(7, 2, "Excelente."),
(7, 3, "Genial.");
-- product 8
INSERT INTO comments (product_id, user_id, comment) VALUES
(8, 1, "Muy bueno."),
(8, 2, "Genial."),
(8, 5, "Excelente.");
-- product 9
INSERT INTO comments (product_id, user_id, comment) VALUES
(9, 1, "Muy bueno."),
(9, 3, "Excelente."),
(9, 4, "Genial.");
-- product 10
INSERT INTO comments (product_id, user_id, comment) VALUES
(10, 1, "Muy bueno."),
(10, 2, "Excelente."),
(10, 3, "Genial.");
