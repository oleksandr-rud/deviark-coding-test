import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsEmail, IsOptional, Length} from "class-validator";

export class UpdateUserDto {
    @ApiPropertyOptional({ example: 'User name' })
    @Length(1, 255)
    @IsOptional()
    name: string;

    @ApiPropertyOptional({ example: 'user@mail.com' })
    @IsEmail()
    @Length(1, 255)
    @IsOptional()
    email: string;

    @ApiPropertyOptional({ example: 'Str0ngPa$$' })
    @Length(1, 25)
    @IsOptional()
    password: string;
}
