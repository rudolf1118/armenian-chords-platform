import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class GQLHealth {
    @Query(() => String)
    health() {
        return "Song Service is healthy";
    }
}