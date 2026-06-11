import { economicEvents } from "../data/mock-data";

export class MockCalendarProvider {
  async fetchEvents() {
    return economicEvents;
  }
}
