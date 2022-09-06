import Event from '../models/Event.model';

export async function createEvent(req, res) {
  try {
    const newEvent = await Event.create(req.body);
    return res.status(201).json({
      message: 'event created successfully',
      event: newEvent,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: 'Issues processing your request',
    });
  }
}
export function deleteEvent() {}
export function updateEvent() {}
export function fetchEvent() {}
