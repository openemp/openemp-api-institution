import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Institution } from './institution.entity';
import { CreateInstitutionDto } from './institutions.dto';
import { InstitutionsService } from './institutions.service';

@Controller('institutions')
export class InstitutionsController {
    constructor(private readonly institutionsService: InstitutionsService) { }


    @Get()
    public getAll(): Promise<Institution[]> {
        return this.institutionsService.getAllInsts();
    }

    @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number): Promise<Institution> {
        return this.institutionsService.getInst(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    public createUser(@Body() Body: CreateInstitutionDto): Promise<Institution> {
        return this.institutionsService.createInst(Body);
    }

}
