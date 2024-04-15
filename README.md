# srcBase

Khởi tạo BD

CREATE TABLE Account (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(255)
)

INSERT INTO Account (username, password)
VALUES ('admin2', '123456aA');

create  table Job (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255)
)

INSERT INTO Job (name, description)
values 
('Teacher', 'Teaching for students'),
('Sale', 'Consulting customer to sell products');
# project-quan-ly-nhan-su-BE
