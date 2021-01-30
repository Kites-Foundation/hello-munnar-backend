import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class facilities1611981680527 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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
            name: 'typeId',
            type: 'bigint',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'address',
            type: 'varchar',
          },
          {
            name: 'pincode',
            type: 'bigint',
          },
          {
            name: 'latitude',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'longitude',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'mobile',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'imageUrl',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'bigint',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "facilities"`);
  }
}
