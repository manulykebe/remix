import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { User, CalendarData } from '../types/index.ts';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const getCalendarData = (): CalendarData => {
  return JSON.parse(readFileSync(join(process.cwd(), 'src/data/calendar.json'), 'utf-8'));
};

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const data = getCalendarData();
    const user = data.users.find(u => u.username === username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, isAdmin: user.isAdmin },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ token, user: { id: user.id, username: user.username, isAdmin: user.isAdmin } });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;