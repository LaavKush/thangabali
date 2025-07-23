# 🎒 Thangabali's Suitcase Marketplace

Welcome to **Thangabali's Suitcase Marketplace**, a fictional web platform for buying and selling second-hand suitcases. This backend project handles real-time bidding, authentication, product listings, and user interactions through REST APIs and Socket.IO.

## 🚀 Features
- 🧑‍💼 User Signup & Login (JWT Authentication)  
- 🎒 Post and Browse Suitcase Listings  
- 💬 Chat between Buyers and Sellers  
- 🔒 Protected Routes with Token Validation  

## 🛠 Tech Stack

**Backend:**  
- Node.js – JavaScript runtime  
- Express.js – Web server framework  
- MongoDB – NoSQL database  
- Mongoose – MongoDB object modeling   
- Bcrypt.js – Password hashing  
- JWT – Authentication  


## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/laavkush/thangabali-marketplace.git
cd thangabali-marketplace
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` File
```
PORT=5000  
MONGO_URI=mongodb://localhost:27017/thangabali  
JWT_SECRET=thangabaliSuperSecret 
```

### 4. Start the Server
```bash
npm start
```

## 🧪 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint     | Description           |
|--------|--------------|-----------------------|
| POST   | /api/signup  | Register a new user   |
| POST   | /api/login   | Login and receive JWT |

### 🎒 Product Routes

| Method | Endpoint            | Description                  |
|--------|---------------------|------------------------------|
| GET    | /api/products       | Get all suitcase listings    |
| POST   | /api/products       | Add a new suitcase (auth required) |
| GET    | /api/products/:id   | Get single product info      |
| PUT    | /api/products/:id   | Update product info          |
| DELETE | /api/products/:id   | Delete product (auth)        |

📮 Postman API Collection
    A Postman collection is included in the repo at:

        📁 postman/Thangabali-API-Collection.json


## 📃 License

Licensed under the MIT License.

## 👤 Author

**Laavanya Kushwaha**  
B.Tech IT | IGDTUW  
GitHub: [@LaavKush](https://github.com/LaavLush)
