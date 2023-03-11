import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const uri = 'mongodb+srv://will:admin@hospital.aplnqkd.mongodb.net/hospital';
@Global()
@Module({
  imports: [MongooseModule.forRoot(uri)],
})
export class DatabaseModule {}
