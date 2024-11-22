import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { Jakan } from 'jakan';

const jakan = new Jakan().forSearch();

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
}
