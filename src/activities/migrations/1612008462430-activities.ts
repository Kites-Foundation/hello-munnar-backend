import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class activities1612008462430 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(
        new Table({
          name: 'activities',
          columns: [
            {
              name: 'activityId',
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
              name: 'destination',
              type: 'bigint',
              isNullable: true,
            },
            {
              name: 'description',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'cost',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'time_range',
              type: 'jsonb',
              isNullable: true,
            },
            {
              name: 'booking_url',
              type: 'jsonb',
              isNullable: true,
            },
            {
              name: 'image_url',
              type: 'jsonb',
              isNullable: true,
            },
            {
              name: 'status',
              type: 'varchar',
              default: "'ACTIVE'",
            },
            {
              name: 'last_login',
              type: 'timestamp',
              isNullable: true,
              default: 'CURRENT_TIMESTAMP',
            },
            {
              name: 'verified_at',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
              isNullable: false,
            },
            {
              name: 'verified_by',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
              isNullable: false,
            },
            {
              name: 'created_by',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
              isNullable: false,
            },
            {
              name: 'updated_by',
              type: 'varchar',
              isNullable: true,
            },
          ],
        }),
        true,
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`DROP TABLE "activities"`);
    }
  }
  
