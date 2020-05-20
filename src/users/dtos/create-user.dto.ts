import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'User name' })
    @Length(1, 255)
    name: string;

    @ApiProperty({ example: 'user@mail.com' })
    @IsEmail()
    @Length(1, 255)
    email: string;

    @ApiProperty({ example: 'Str0ngPa$$' })
    @Length(1, 25)
    password: string;
}
