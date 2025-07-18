import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateChordOnLineInput {  @Field()
    @Field()
    chord: string;
  
    @Field()
    start: number;
  
    @Field()
    end: number;
}