CREATE TABLE IF NOT EXISTS users
(
    id         UUID         NOT NULL,
    name       VARCHAR(100) NOT NULL,
    email      VARCHAR(150) NOT NULL,
    password   VARCHAR(256) NOT NULL,
    role_id    UUID         NOT NULL,
    created_at TIMESTAMP    NOT NULL DEFAULT now(),
    updated_at TIMESTAMP,
    CONSTRAINT users_id_pk PRIMARY KEY (id),
    CONSTRAINT users_role_id_fk FOREIGN KEY (role_id) REFERENCES roles (id)
        ON UPDATE RESTRICT ON DELETE RESTRICT,
    CONSTRAINT users_email_uk UNIQUE (email)
);

COMMENT ON TABLE users IS 'Holds the users who will have access to the system';

