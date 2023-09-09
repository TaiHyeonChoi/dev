import { Entity } from "typeorm";



//@ObjectTyep() GraphQL 사용시 진행할 예정 
// 변경할 예정이에요! 잠시 테스트했어요
@Entity()
export class user {

    id: string
    
    user: string
    


}
