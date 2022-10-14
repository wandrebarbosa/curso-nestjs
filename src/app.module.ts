import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'cursonestjs',
    entities: [__dirname + '/**/*.entity.js'],
    autoLoadEntities: true,
    synchronize: false, // segundo doc, nunca usar o synchronize em produção
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
