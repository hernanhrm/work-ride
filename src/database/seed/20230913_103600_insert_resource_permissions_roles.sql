INSERT INTO resource_permissions_roles (id, resource_permission_id, role_id, permissions)
SELECT gen_random_uuid(), id, (SELECT id FROM roles WHERE name = 'ADMIN'), 'create,update,delete,findAll,findOne'
FROM resource_permissions;

