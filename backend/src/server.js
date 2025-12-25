import express from 'express'; 
import  'dotenv/config';
const PORT = process.env.PORT 
const app = express();
import authRoutes from './routes/auth.route.js';
// app.get('/api/auth/signup', (req, res) => {  
//   res.send('SignUp Route');  
// });


// app.get('/api/auth/login', (req, res) => {  
//   res.send('login Route'); 

// });

// app.get('/api/auth/logout', (req, res) => {  
//   res.send('logout Route');  
// });

app.use("/api/auth",authRoutes)

app.listen(PORT, () => {  
  console.log(`Server is running on port ${PORT}`);  
});