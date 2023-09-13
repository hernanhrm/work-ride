-- password is `admin`
INSERT INTO users (id, name, email, password, role_id)
VALUES (gen_random_uuid(), 'admin', 'admin@admin.com', '$2a$10$ZvSAap27UtZRp0a1e5BlReO3m65soGLyHUywxmpT/oGJNFt72.CIK',
        (SELECT id FROM roles WHERE name = 'ADMIN'));

