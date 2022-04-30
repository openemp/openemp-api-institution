import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { InstitutionsModel } from './institutions.interface';
import { InstitutionsService } from './institutions.service';

@Controller('institutions')
export class InstitutionsController {
    constructor(private readonly institutionsService: InstitutionsService) {}

    @Get()
    public findAll(): Array<InstitutionsModel> {
    return this.institutionsService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number): InstitutionsModel {
    return this.institutionsService.findOne(id);
    }

}
