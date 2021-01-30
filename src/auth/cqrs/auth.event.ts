export class AuthUserEvent {
  constructor(
    public readonly userId: number,
    public readonly eventType: string,
  ) {}
}