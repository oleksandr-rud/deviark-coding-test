import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {UsersService} from "./users.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./interfaces/user.interface";
import {UserDto} from "./dtos/user.dto";
import {CreateUserDto} from "./dtos/create-user.dto";
import {FindUsersDto} from "./dtos/find-users.dto";
import {UpdateUserDto} from "./dtos/update-user.dto";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('')
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({
        status: 201,
        description: 'Create new user.',
        type: UserDto,
    })
    create(@Body() payload: CreateUserDto): Promise<User> {
        return this.usersService.create(payload);
    }

    @Get('')
    @ApiResponse({
        status: 200,
        description: 'Return list of all users.',
        isArray: true,
        type: UserDto,
    })
    findMany(@Query() { createdAt }: FindUsersDto): Promise<UserDto[]> {
        return this.usersService.findMany(createdAt);
    }

    @Put(':userId')
    @HttpCode(HttpStatus.ACCEPTED)
    @ApiResponse({
        status: HttpStatus.ACCEPTED,
        description: 'Update user by Id.',
        type: UserDto,
    })
    update(@Param('userId') userId: string, @Body() payload: UpdateUserDto): Promise<User> {
        return this.usersService.update(userId, payload);
    }

    @Delete(':userId')
    @HttpCode(HttpStatus.ACCEPTED)
    @ApiResponse({
        status: HttpStatus.ACCEPTED,
        description: 'Delete user by Id.',
        type: UserDto,
    })
    delete(@Param('userId') userId: string): Promise<User> {
        return this.usersService.delete(userId);
    }
}
