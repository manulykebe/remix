import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import calendarRoutes from './routes/calendar.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/calendar', calendarRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});