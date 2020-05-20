import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MongooseModule.forRootAsync({
            useFactory: (config: ConfigService) => ({
                uri: config.get('MONGO_URL'),
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            }),
            inject: [ConfigService],
        }),
        UsersModule
    ],
})
export class AppModule {
}
