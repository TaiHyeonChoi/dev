import { IsString } from "class-validator";
import { Entity } from "typeorm";

@Entity()
export class user {

    
    id: string
    
    user: string
    
}
