from fastapi import FastAPI

app = FastAPI(title="MotoTour Store API")

@app.get("/health")
def health_check():
    return {"status": "healthy", "app": "MotoTour"}

@app.get("/")
def home():
    return {"message": "Welcome to MotoTour Store"}

@app.get("/products")
def get_products():
    return [
        {
            "id": 1,
            "name": "Touring Helmet",
            "price": 12000,
            "category": "Safety Gear"
        },
        {
            "id": 2,
            "name": "Riding Gloves",
            "price": 3500,
            "category": "Safety Gear"
        },
        {
            "id": 3,
            "name": "Motorcycle Saddle Bag",
            "price": 8500,
            "category": "Touring Accessories"
        }
    ]
