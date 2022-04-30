import { Injectable, NotFoundException } from '@nestjs/common';
import { InstitutionsModel } from './institutions.interface';

@Injectable()
export class InstitutionsService {
    private institutions: Array<InstitutionsModel> = [];

    public findAll(): Array<InstitutionsModel> {
        return this.institutions;
      }

      public findOne(id: number): InstitutionsModel {
        const post: InstitutionsModel = this.institutions.find(post => post.id === id);
      
        if (!post) {
          throw new NotFoundException('Inst not found.');
        }
      
        return post;
      }
}
