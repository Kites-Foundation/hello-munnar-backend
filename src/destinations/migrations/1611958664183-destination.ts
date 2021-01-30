import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class destination1611958664183 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'destinations',
        columns: [
          {
            name: 'destinationId',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'latitude',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'Description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'type',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'longitude',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'imageUrl',
            type: 'jsonb',
            isNullable: true,
          },

          {
            name: 'route',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'currentTemperature',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'bestTime',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'bestMonth',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'tags',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'varchar',
            default: "'ACTIVE'",
          },
          {
            name: 'reviews',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'activities',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'lastLogin',
            type: 'timestamp',
            isNullable: true,
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'verifiedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'verifiedBy',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'createdBy',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updatedBy',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "destinations"`);
  }
}
