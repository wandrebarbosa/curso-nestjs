import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

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
    create(@Body() body) {
        return body
    }

}
