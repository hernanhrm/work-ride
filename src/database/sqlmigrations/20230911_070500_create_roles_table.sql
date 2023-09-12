CREATE TABLE IF NOT EXISTS roles
(
    id         UUID         NOT NULL,
    name       VARCHAR(100) NOT NULL,
    created_at TIMESTAMP    NOT NULL DEFAULT now(),
    updated_at TIMESTAMP,
    CONSTRAINT roles_id_pk PRIMARY KEY (id)
);

COMMENT ON TABLE roles IS 'Holds the basic information for roles';

