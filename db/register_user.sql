INSERT INTO users (
    username,
    user_password
)
VALUES (
    $1,
    $2
)

-- RETURNING *;