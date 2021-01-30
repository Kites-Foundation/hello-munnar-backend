import { Users } from '../entities';

export class AuthCommand {
  constructor(public readonly user: Users, public readonly type: string) {}
}
