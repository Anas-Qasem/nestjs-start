import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

@Module({
  imports: [],
  exports: [],
  providers: [BookingService],
  controllers: [BookingController],
})
export class BookingModule {}
