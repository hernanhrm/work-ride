CREATE TABLE IF NOT EXISTS resource_permissions_roles
(
    id                     UUID      NOT NULL,
    resource_permission_id UUID      NOT NULL,
    role_id                UUID      NOT NULL,
    permissions            TEXT      NOT NULL DEFAULT 'Create,GetAll,GetByID,Update,Delete',
    created_at             TIMESTAMP NOT NULL DEFAULT now(),
    updated_at             TIMESTAMP,
    CONSTRAINT resource_permissions_roles_id_pk PRIMARY KEY (id),
    CONSTRAINT resource_permissions_roles_resource_permission_id_fk FOREIGN KEY (resource_permission_id) REFERENCES resource_permissions (id)
        ON UPDATE RESTRICT ON DELETE RESTRICT,
    CONSTRAINT resource_permissions_roles_role_id_fk FOREIGN KEY (role_id) REFERENCES roles (id)
        ON UPDATE RESTRICT ON DELETE RESTRICT
);

COMMENT ON TABLE resource_permissions_roles IS 'Holds the relation between the roles and resource permissions';
