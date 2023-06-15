import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.models';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://melektavusintikam:Mm19899891@cluster0.zl7xxsy.mongodb.net/?retryWrites=true&w=majority'), 
            MongooseModule.forFeature([{name: 'user', schema: UserSchema}])
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
