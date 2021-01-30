import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class rolesUsers1612001777467 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'role_users',
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
            name: 'userId',
            type: 'bigint',
          },
          {
            name: 'refId',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'type',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'createdBy',
            type: 'bigint',
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

    await queryRunner.createForeignKeys('role_users', [
      new TableForeignKey({
        columnNames: ['userId'],
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
      new TableForeignKey({
        columnNames: ['createdBy'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "role_users"`);
  }
}
