import { IsString } from "class-validator";
import { Entity } from "typeorm";

@Entity()
export class user {

    @IsString()
    id: string
    
    user: string
    
}
