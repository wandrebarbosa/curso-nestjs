import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService){}

    @Get() // posso colocar uma nova direta para o método ex: get('list')
    findAll(@Res() response): string {
        return response.status(200).send("Listagem dos cursos")
    }

    // @Get(':id')
    // findOne(@Param() params) { //para usa de um ou mais parametros 
    //     return `Curso de numero #${params.id}`;
    // }
    
    @Get(':id')
    findOne(@Param('id') id): string {
        return `Curso de numero #${id}`
    }


    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body) {
        return body;
    }


    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `Atualização do Curso #${id}`
    }


    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Excluido curso #${id}`
    }


}
