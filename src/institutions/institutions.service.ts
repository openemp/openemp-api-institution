import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Institution } from './institution.entity';
import { CreateInstitutionDto } from './institutions.dto';

@Injectable()
export class InstitutionsService {

  @InjectRepository(Institution)
  private readonly repository: Repository<Institution>;

  public getAllUsers(): Promise<Institution[]> {
    return this.repository.find();
  }

  public getUser(id: number): Promise<Institution> {
    return this.repository.findOne({
      where: [
        {id: id}
      ]
    });
  }

  public createUser(body: CreateInstitutionDto): Promise<Institution> {
    const user: Institution = new Institution();

    user.name = body.name;
    user.email = body.email;

    return this.repository.save(user);
  }

  }
