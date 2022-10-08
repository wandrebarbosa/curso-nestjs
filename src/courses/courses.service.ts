import { Injectable } from '@nestjs/common';
import { Course } from './entities/courses.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'Fundamentos do framework NestJs',
            description: 'Framework NestJs',
            tags: ['nodeJs', 'NestJs', 'Javascript']
        },
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string){
        return this.courses.find((course) => course.id === Number(id))
    }

    create(createCourseDto: any) {
        this.courses.push(createCourseDto)
    }

    uptade(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex(
            course => course.id === Number(id));

            this.courses[indexCourse] = updateCourseDto;
    }

    remove(id: string) {
        const indexCourse = this.courses.findIndex(
            course => course.id === Number(id));

            if(indexCourse >= 0) {
                this.courses.splice(indexCourse, 1)
            }
    }
}
