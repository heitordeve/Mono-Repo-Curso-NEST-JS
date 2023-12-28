/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'NestJS',
            description: 'modelo descrição',
            tags: ['teste1','teste2','teste3','teste4','teste5']
        }
    ]
}

