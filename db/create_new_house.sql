INSERT INTO houses (
    house_name,
    description,
    address,
    city,
    state,
    zip,
    image_url,
    loan,
    mortgage,
    desired_rent,
    user_id
)

VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10,
    $11
)
-- RETURNING *;