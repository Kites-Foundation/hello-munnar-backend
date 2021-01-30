import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class routes1611943981900 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    return await queryRunner.createTable(
      new Table({
        name: 'routes',
        columns: [
          {
            name: 'routeId',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'routeName',
            type: 'varchar',
          },
          {
            name: 'imageUrl',
            type: 'varchar',
          },
          {
            name: 'review',
            type: 'bigint',
          },
          {
            name: 'source',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'destination',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'totalDistance',
            type: 'float',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "routes"`);
  }
}
