import express from 'express';
import categoryRoutes from './routes/categoryRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', categoryRoutes);
app.use(errorHandler);

app.use(cors());

app.get('/', (req, res) => {
    res.send('Servidor rodando!');
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
  });
  

export default app;