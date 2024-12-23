import requests
from geopy.geocoders import Nominatim

API_KEY = "sk-proj-VQTR1qM89SRBq37sYdk2tt1_Kx_pHeyBoIYvIpFXocXL0R7Jr17EzxA-TXuNOihIyaxMpON6S8T3BlbkFJTf7SfmpHAQ-buN"

def get_current_location():
    geolocator = Nominatim(user_agent="geoapiExercises")
    location = geolocator.geocode("bengaluru,india")
    return location.latitude, location.longitude

def find_nearby_places(lat, lon, place_type):
    url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json"
    params = {
        "location": f"{lat},{lon}",
        "radius": 5000,
        "type": place_type,
        "key": API_KEY,
    }
    response = requests.get(url, params=params)
    results = response.json()["results"]
    return [(place["name"], place["vicinity"]) for place in results[:5]]

if __name__ == "__main__":
    latitude, longitude = get_current_location()

    print("Finding nearest police stations...")
    police_stations = find_nearby_places(latitude, longitude, "police")
    for name, address in police_stations:
        print(f"Name: {name}, Address: {address}")

    print("\nFinding nearest hospitals...")
    hospitals = find_nearby_places(latitude, longitude, "hospital")
    for name, address in hospitals:
        print(f"Name: {name}, Address: {address}")
