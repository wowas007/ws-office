#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script zum Herunterladen aller Thumbnails und Bilder aus der Aktuelles-Archiv JSON-Datei.
Ausfuehren im Ordner ~/ws-office/Medien:
  python3 download_bilder.py
"""
import os, json, urllib.request, re, time

base_dir = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(base_dir, "aktuelles_archiv.json")

print(f"Lese Archiv: {json_path}")
with open(json_path, "r", encoding="utf-8") as f:
    data = json.load(f)

articles = data["articles"]
img_dir = os.path.join(base_dir, "thumbnails")
os.makedirs(img_dir, exist_ok=True)
print(f"Speichere Bilder in: {img_dir}\n")

headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"}
downloaded = 0
errors = 0

for art in articles:
    print(f"[{art['index']:02d}] {art['date']} – {art['title'][:55]}")
    
    img_url = art.get("thumbnailUrl", "")
    if img_url:
        m = re.search(r"/t/(\\d+)", img_url)
        img_id = m.group(1) if m else str(art["index"])
        filename = f"artikel_{art['index']:02d}_thumb_{img_id}.jpg"
        filepath = os.path.join(img_dir, filename)
        if not os.path.exists(filepath):
            try:
                req = urllib.request.Request(img_url, headers=headers)
                with urllib.request.urlopen(req, timeout=15) as resp, open(filepath, "wb") as f:
                    data_bytes = resp.read()
                    f.write(data_bytes)
                print(f"  ✓ Thumbnail: {filename} ({len(data_bytes)//1024}KB)")
                downloaded += 1
                time.sleep(0.4)
            except Exception as e:
                print(f"  ✗ FEHLER: {e}")
                errors += 1
        else:
            print(f"  ✓ Vorhanden: {filename}")
    
    # Weitere Bilder im Artikel
    for i, img in enumerate(art.get("images", [])):
        img_url2 = img.get("src", "")
        if img_url2 and img_url2 != img_url:
            m2 = re.search(r"/(?:t|p)/(\\d+)", img_url2)
            img_id2 = m2.group(1) if m2 else f"{art['index']}_{i}"
            fn2 = f"artikel_{art['index']:02d}_bild_{img_id2}.jpg"
            fp2 = os.path.join(img_dir, fn2)
            if not os.path.exists(fp2):
                try:
                    req2 = urllib.request.Request(img_url2, headers=headers)
                    with urllib.request.urlopen(req2, timeout=15) as resp2, open(fp2, "wb") as f2:
                        data2 = resp2.read()
                        f2.write(data2)
                    print(f"    ✓ Bild: {fn2} ({len(data2)//1024}KB)")
                    downloaded += 1
                    time.sleep(0.4)
                except Exception as e2:
                    print(f"    ✗ FEHLER: {e2}")
                    errors += 1

print(f"\n=== Fertig! ===")
print(f"Heruntergeladen: {downloaded} Bilder")
print(f"Fehler: {errors}")
print(f"Gespeichert in: {img_dir}")
