from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="MotoTour Store API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://192.168.77.128:5173",
        "http://localhost:5173",
        "http://192.168.77.128:8081",
        "http://192.168.77.128:8082",
        "http://192.168.77.128:8083",
        "http://192.168.77.128:8084",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "healthy", "app": "MotoTour"}

@app.get("/")
def home():
    return {"message": "Welcome to MotoTour Store"}

@app.get("/products")
def get_products():
    return [
        {"id": 1, "name": "Touring Helmet", "price": 12000, "category": "Safety Gear"},
        {"id": 2, "name": "Riding Gloves", "price": 3500, "category": "Safety Gear"},
        {"id": 3, "name": "Motorcycle Saddle Bag", "price": 8500, "category": "Touring Accessories"},
    ]
