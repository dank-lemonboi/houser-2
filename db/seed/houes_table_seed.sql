CREATE TABLE houses (
    house_id SERIAL PRIMARY KEY,
    house_name VARCHAR(300),
    description TEXT,
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(40),
    zip integer,
    image_url TEXT,
    loan INTEGER,
    mortgage INTEGER,
    desired_rent INTEGER,
    user_id INTEGER
     REFERENCES users(user_id)
)