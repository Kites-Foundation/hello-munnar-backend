import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class rolesUserActions1612001785950 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'role_actions',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'roleId',
            type: 'bigint',
          },
          {
            name: 'method',
            type: 'varchar',
          },
          {
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'createdBy',
            type: 'bigint',
          },
          {
            name: 'status',
            type: 'varchar',
            default: "'ACTIVE'",
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKeys('role_actions', [
      new TableForeignKey({
        columnNames: ['createdBy'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['roleId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'roles',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "role_actions"`);
  }
}
