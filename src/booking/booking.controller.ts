import { Controller, Post } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}
  /// create a booking
  @Post('/create') createBooking() {
    return this.bookingService.createBooking();
  }
}
