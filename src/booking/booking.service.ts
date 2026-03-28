import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingService {
  createBooking() {
    return 'Booking created';
  }
}
