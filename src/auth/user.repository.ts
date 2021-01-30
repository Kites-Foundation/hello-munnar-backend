import { EntityRepository, Repository } from 'typeorm';
import { Users } from './entities';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {}
