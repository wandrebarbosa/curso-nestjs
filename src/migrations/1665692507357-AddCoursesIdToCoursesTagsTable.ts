import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class AddCoursesIdToCoursesTagsTable1665692507357 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('courses_tags', new TableColumn({
            name: 'coursesId',
            type: 'uuid',
            isNullable: true //inserimos essa propriedade, devido ao fato de se ja exitir registro na tabela que nao tenha esse campo antes, o valore deles será atribuido como null.
        }));
        

        await queryRunner.createForeignKey('courses_tags', new TableForeignKey({
            name: 'courses_tags_courses',
            columnNames: ['coursesId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'courses',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('courses_tags', 'courses_tags_courses');

        await queryRunner.dropColumn('courses_tags', 'coursesId')
    }

}
