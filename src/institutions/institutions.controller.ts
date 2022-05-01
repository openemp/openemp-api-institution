import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Institution } from './institution.entity';
import { CreateInstitutionDto } from './institutions.dto';
import { InstitutionsService } from './institutions.service';

@Controller('institutions')
export class InstitutionsController {
    constructor(private readonly institutionsService: InstitutionsService) {}

    @Get()
    public getAll(): Promise<Institution[]> {
        return this.institutionsService.getAllUsers();
    }

    @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number): Promise<Institution> {
    return this.institutionsService.getUser(id);
    }
    @Post()
    public createUser(@Body() Body: CreateInstitutionDto): Promise<Institution> {
        return this.institutionsService.createUser(Body);
    }

}
