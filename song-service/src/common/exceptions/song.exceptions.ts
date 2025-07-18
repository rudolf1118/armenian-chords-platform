import { BadRequestException } from '@nestjs/common';

export class SongAlreadyExistsException extends BadRequestException {
  constructor() {
    super('A song with the provided name. Please choose a different name or slug.');
  }
}