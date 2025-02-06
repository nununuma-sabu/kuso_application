from shop_scraper import RamenShopScraper
import csv
import time
from tqdm import tqdm

base_url = "https://tabelog.com/tokyo/rstLst/ramen/@/?SrtT=rt&Srt=D&sort_mode=1"
all_shops = []

for i in tqdm(range(1, 51), desc="Scraping pages"):
    url = base_url.replace("@", str(i))
    scraper = RamenShopScraper(url)
    scraper.fetch_data()
    all_shops.extend(scraper.get_shops())
    time.sleep(1)

# CSVに保存
with open("ramen_shops.csv", "w", newline="", encoding="utf-8") as csvfile:
    fieldnames = ["店舗名", "リンク"]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()
    for shop in all_shops:
        writer.writerow({"店舗名": shop["name"], "リンク": shop["link"]})

for shop in all_shops:
    print(f"店名: {shop['name']}, リンク: {shop['link']}")
