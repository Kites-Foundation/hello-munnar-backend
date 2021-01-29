import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class facilities1611959434300 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'facilities',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'typeid',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'address',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'pincode',
            isNullable: true,
            type: 'bigint',
          },
          {
            name: 'latitude',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'longitude',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'contact',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'imageUrl',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'varchar',
            isNullable: true,
          },
          {
            type: 'bigint',
            name: 'type',
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
    await queryRunner.query(`DROP TABLE "facilities"`);
  }
}
