import { BadRequestException } from '@nestjs/common';

export class ArtistAlreadyExistsException extends BadRequestException {
  constructor() {
    super('Artist with this name or slug already exists');
  }
}

export class ArtistNotFoundException extends BadRequestException {
  constructor() {
    super('Artist not found');
  }
}

export class ArtistInvalidInputException extends BadRequestException {
  constructor() {
    super('Invalid artist input data');
  }
}

export class ArtistUpdateFailedException extends BadRequestException {
  constructor() {
    super('Failed to update artist');
  }
}

export class ArtistDeleteFailedException extends BadRequestException {  
  constructor() {
    super('Failed to delete artist');
  }
}
