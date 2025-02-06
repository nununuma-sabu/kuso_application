import pandas as pd

# CSVファイルを読み込む
df = pd.read_csv("ramen_shops.csv", encoding="utf-8")

# リンクの項目を"/"で分割
df["リンク分割"] = df["リンク"].apply(lambda x: x.split("/"))

# 分割したリンクの文字列の4-6番目の項目を新規の項目として追加
df["都道府県"] = df["リンク分割"].apply(lambda x: x[3] if len(x) > 3 else None)
df["大エリア"] = df["リンク分割"].apply(lambda x: x[4] if len(x) > 4 else None)
df["中エリア"] = df["リンク分割"].apply(lambda x: x[5] if len(x) > 5 else None)

# リンク分割の項目を削除
df.drop(columns=["リンク分割"], inplace=True)

# 新規項目を追加後のデータフレームの内容を表示
print(df.head())

# 大エリアのグループごとの件数を出力（インデックスなし）
grouped_large_area = (
    df.groupby(["大エリア"])
    .size()
    .reset_index(name="件数")
    .sort_values(by="件数", ascending=False)
)
print(grouped_large_area.to_string(index=False))

# 中エリアのグループごとの件数を出力（インデックスなし）
grouped_middle_area = (
    df.groupby(["中エリア"])
    .size()
    .reset_index(name="件数")
    .sort_values(by="件数", ascending=False)
)
grouped_middle_area["大エリア"] = grouped_middle_area["中エリア"].apply(lambda x: x[:5])
grouped_middle_area = grouped_middle_area[["大エリア", "中エリア", "件数"]]
print(grouped_middle_area.to_string(index=False))

# 大エリアのグループ件数をCSVに保存
grouped_large_area.to_csv("grouped_large_area.csv", encoding="utf-8", index=False)

# 中エリアのグループ件数をCSVに保存
grouped_middle_area.to_csv("grouped_middle_area.csv", encoding="utf-8", index=False)
