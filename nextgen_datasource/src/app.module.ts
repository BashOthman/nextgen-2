import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: 'localhost',
    //   port: 1433,
    //   username: 'your_sql_user',
    //   password: 'your_sql_password',
    //   database: 'your_database',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    //   options: {
    //     encrypt: false,
    //   },
    // }),
    UsersModule,
  ],
})
export class AppModule {}
