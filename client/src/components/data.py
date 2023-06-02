import requests
import json
from bs4 import BeautifulSoup

def scrapeData(url):
    # Make a GET request to the specified URL
    response = requests.get(url)
    
    # Check if the response was successful
    if response.status_code != 200:
        return None
    
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Extract relevant data from the HTML content
    property_data = []
    for item in soup.find_all('div', class_='property-item'):
        property_data.append({
            'address': item.find('div', class_='address').text.strip(),
            'price': item.find('div', class_='price').text.strip(),
            'beds': item.find('div', class_='beds').text.strip(),
            'baths': item.find('div', class_='baths').text.strip(),
            'sqft': item.find('div', class_='sqft').text.strip(),
            'link': item.find('a').get('href')
        })
    
    # Convert the property data to JSON format
    property_data_json = json.dumps(property_data)
    
    return property_data_json

def analyzeData(property_data):
    # Analyze the property data to identify trends
    # For example, calculate the average price per square foot
    prices = [int(property['price'].replace('$', '').replace(',', '')) for property in property_data]
    sqfts = [int(property['sqft'].replace(',', '')) for property in property_data]
    
    avg_price_per_sqft = sum(prices) / sum(sqfts)
    
    return avg_price_per_sqft
