export class RoleCheckCommand {
  constructor(
    public readonly userId: number,
    public readonly level: string,
    public readonly refId: number,
  ) {
  }
}
