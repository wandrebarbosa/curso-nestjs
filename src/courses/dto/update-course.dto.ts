import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseDto } from "./create-course.dto";

export class UpdateCourseDto extends PartialType(CreateCourseDto) { // posso usar o mesmo padrao de estrutura do meu primeiro DTO, create-course.dto para os demais Dto, nao tento que reenscrever.
    
}
