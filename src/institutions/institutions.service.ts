import { Injectable } from '@nestjs/common';
import { institutionsModel } from './institutions.interface';

@Injectable()
export class InstitutionsService {
    private institutions: Array<institutionsModel> = [];

    public findAll(): Array<institutionsModel> {
        return this.institutions;
      }
}
