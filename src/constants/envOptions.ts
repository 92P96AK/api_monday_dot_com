/*
origin field can be controlled through .env file 
*/
export const corsOptions = {
  origin: ["http://localhost:3000", "http://example.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
