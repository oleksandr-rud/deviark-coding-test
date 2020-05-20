import {ApiProperty} from "@nestjs/swagger";

export class UserDto {
    @ApiProperty({ example: 'User name' })
    _id: string;

    @ApiProperty({ example: 'User name' })
    name: string;

    @ApiProperty({ example: 'user@mail.com' })
    email: string;

    @ApiProperty({ example: 'Str0ngPa$$' })
    password: string;

    @ApiProperty({ example: new Date() })
    createdAt: string;

    @ApiProperty({ example: new Date() })
    updatedAt: string;
}
