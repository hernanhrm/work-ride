CREATE TABLE IF NOT EXISTS resource_permissions
(
    id          UUID         NOT NULL,
    name        VARCHAR(100) NOT NULL,
    description TEXT,
    created_at  TIMESTAMP    NOT NULL DEFAULT now(),
    updated_at  TIMESTAMP,
    CONSTRAINT resource_permissions_id_pk PRIMARY KEY (id),
    CONSTRAINT resource_permissions_name_uk UNIQUE (name)
);

COMMENT ON TABLE resource_permissions IS 'Holds the available resources in the platform';

