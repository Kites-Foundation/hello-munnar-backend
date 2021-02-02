import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class destinations1612013721214 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
          new Table({
            name: 'Destination',
            columns: [
              {
                name: 'id',
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
                name: 'description',
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
                name: 'image_url',
                type: 'jsonb',
                isNullable: true,
              },
    
              {
                name: 'route',
                type: 'bigint',
                isNullable: true,
              },
              {
                name: 'current_temperature',
                type: 'varchar',
                isNullable: true,
              },
              {
                name: 'best_time',
                type: 'varchar',
                isNullable: true,
              },
              {
                name: 'best_month',
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
        await queryRunner.query(`DROP TABLE "destinations"`);
      }
    }