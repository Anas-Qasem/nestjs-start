import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { BookingModule } from './booking/booking.module';
import { PaymentModule } from './payment/payment.module';
import { DatabaseModule } from './core/database/database.module';
@Module({
  imports: [BookingModule, PaymentModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
