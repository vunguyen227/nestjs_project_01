import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { RolePermission } from 'src/api/permission/permission.enum';
import { PermissionGuard } from '../guards/permissions.guard';

export const PERMISSIONS_KEY = 'permissions';
export const HasPermissions = (...permissions: RolePermission[]) =>
  applyDecorators(SetMetadata(PERMISSIONS_KEY, permissions), UseGuards(PermissionGuard));