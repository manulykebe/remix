import express from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { auth, AuthRequest } from '../middleware/auth.js';
import { CalendarData, DateRequest } from '../types/index.js';

const router = express.Router();

const getCalendarData = (): CalendarData => {
  return JSON.parse(readFileSync(join(process.cwd(), 'src/data/calendar.json'), 'utf-8'));
};

const saveCalendarData = (data: CalendarData) => {
  writeFileSync(
    join(process.cwd(), 'src/data/calendar.json'),
    JSON.stringify(data, null, 2)
  );
};

// Get all date requests
router.get('/requests', auth, (req, res) => {
  const data = getCalendarData();
  res.json(data.dateRequests);
});

// Create new date request
router.post('/requests', auth, (req: AuthRequest, res) => {
  try {
    const { date, status } = req.body;
    const user = req.user!;

    const newRequest: DateRequest = {
      id: uuidv4(),
      userId: user.id,
      date,
      status,
      acknowledged: false,
      createdAt: new Date().toISOString()
    };

    const data = getCalendarData();
    data.dateRequests.push(newRequest);
    saveCalendarData(data);

    res.status(201).json(newRequest);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
});

// Acknowledge date request (admin only)
router.patch('/requests/:id/acknowledge', auth, (req: AuthRequest, res) => {
  try {
    const user = req.user!;
    if (!user.isAdmin) {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const data = getCalendarData();
    const request = data.dateRequests.find((r: DateRequest) => r.id === req.params.id);

    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }

    request.acknowledged = true;
    request.acknowledgedBy = user.id;
    saveCalendarData(data);

    res.json(request);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
});

export default router;