
const app = require('./src/app');
const connectDB = require('./src/db/db');

// Start server immediately, database connection will happen in background
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Try to connect to database asynchronously
connectDB().then(() => {
  console.log('Database connected successfully');
}).catch((error) => {
  console.error('Database connection failed:', error.message);
  console.log('Server will continue running without database connectivity');
}); 