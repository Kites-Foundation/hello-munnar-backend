import { Repository, EntityRepository } from 'typeorm';
import { RoleUsers } from './entities';

@EntityRepository(RoleUsers)
export class RoleUserRepository extends Repository<RoleUsers> {}
