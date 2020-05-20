import {ApiPropertyOptional} from "@nestjs/swagger";
import {IsDateString, IsOptional} from "class-validator";

export class FindUsersDto {
    @ApiPropertyOptional({ example: new Date() })
    @IsDateString()
    @IsOptional()
    createdAt?: string;
}
