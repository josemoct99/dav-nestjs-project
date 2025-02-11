import { MigrationInterface, QueryRunner } from "typeorm";

export class GenericInit1739241163967 implements MigrationInterface {
    name = 'GenericInit1739241163967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "generic" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_5ade0e1c8a4a45be1b552ca0a6a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "generic"`);
    }

}
