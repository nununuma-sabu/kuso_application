import requests
from bs4 import BeautifulSoup


class RamenShopScraper:
    def __init__(self, url):
        self.url = url
        self.shops = []

    def fetch_data(self):
        try:
            response = requests.get(self.url)
            response.raise_for_status()
            self.parse_data(response.text)
        except requests.exceptions.RequestException as e:
            print(f"Failed to retrieve data: {e}")

    def parse_data(self, html):
        soup = BeautifulSoup(html, "html.parser")
        shop_elements = soup.find_all("a", class_="list-rst__rst-name-target")
        for shop in shop_elements:
            name = shop.text.strip()
            link = shop["href"]
            self.shops.append({"name": name, "link": link})

    def get_shops(self):
        return self.shops
