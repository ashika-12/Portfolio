import os
import json

BASE_DIR = "/home/salesflow/Downloads/Docs"
GRAPHICS_DIR = os.path.join(BASE_DIR, "Graphics Designing-20260821T090629Z-1-001/Graphics Designing")
LOGOS_DIR = os.path.join(BASE_DIR, "Logo Designing-20260821T090626Z-1-001/Logo Designing")
VIDEOS_DIR = os.path.join(BASE_DIR, "Video editing-20260821T090625Z-1-002/Video editing")
PDF_PREVIEWS_DIR = os.path.join(BASE_DIR, "pdf_previews")

GRAPHIC_BRANDS_INFO = {
    "Sumangali": {"name": "Sumangali Jewellery", "tag": "Luxury Jewellery Ads", "desc": "High-end luxury gold, diamond, and bridal jewellery promotional campaigns and social creatives."},
    "Vakaman Developers": {"name": "Vakaman Developers", "tag": "Real Estate Campaigns", "desc": "Luxury real estate, Amber carousels, and architectural property launch static posts."},
    "BOCS PIZZA": {"name": "BOCS Pizza", "tag": "F&B Festival Creatives", "desc": "Vibrant holiday, festival (Holi, Onam), and promotional food social media campaigns."},
    "Curry Life": {"name": "Curry Life", "tag": "Culinary & FMCG", "desc": "Multi-slide promotional carousels & institutional supplier social media designs."},
    "E-Now Batteries": {"name": "E-Now Batteries", "tag": "Tech & Industrial", "desc": "High-impact tech product carousels & battery features highlights."},
    "RK Ecran": {"name": "RK Ecran", "tag": "Home Protection Solutions", "desc": "Barrier-free protection, mosquito screens, and sliding door product campaigns."},
    "Thenneera": {"name": "Thenneera", "tag": "Natural Beverage FMCG", "desc": "Hyper-local awareness campaigns, distributor onboarding carousels, and meet & greet posts."},
    "Meddipro": {"name": "Meddipro", "tag": "Healthcare & Surgical", "desc": "Surgical consumables, medical equipment static ads, and story campaign creatives."},
    "Perroquetta Roofing Sheets": {"name": "Perroquetta Roofing", "tag": "Building & Architecture", "desc": "UPVC roofing sheets product awareness, mobile statics, and home exterior posts."},
    "Pupa": {"name": "Pupa", "tag": "Product & Hiring Creatives", "desc": "Product awareness posts, bulk order campaigns, and corporate hiring announcements."},
    "ARD Solutions - Banglore": {"name": "ARD Solutions", "tag": "IT & Corporate Solutions", "desc": "B2B manufacturer static ads and IT enterprise solutions graphics."},
    "Kanmani": {"name": "Kanmani Milk", "tag": "Dairy & Consumer Goods", "desc": "Fresh dairy milk promotional posters and consumer graphics."},
    "Techno sports": {"name": "Techno Sports", "tag": "Sportswear & Fitness", "desc": "Modern premium sportswear graphics and activewear promotional posts."}
}

LOGO_GUIDELINES_INFO = {
    "dall_labs_style_guide_final_copy-1": {
        "title": "Dall Labs Style Guide",
        "pdfName": "dall labs style guide final copy-1.pdf",
        "tag": "Brand Identity & Style Guide",
        "desc": "Complete visual identity, typography system, brand color palettes, and logo usage guidelines for Dall Labs."
    },
    "invictus_final": {
        "title": "Invictus Brand Identity",
        "pdfName": "Invictus final.pdf",
        "tag": "Corporate Identity & Logo System",
        "desc": "Comprehensive corporate brand guidelines, emblem design, icon grid, and stationery mockups."
    },
    "snacko_brand_guidelins_v1": {
        "title": "Snacko Brand Guidelines",
        "pdfName": "Snacko brand guidelins_V1.pdf",
        "tag": "FMCG Brand Guidelines",
        "desc": "Vibrant packaging identity, logo construction, color theory, and packaging mockups for Snacko brand."
    },
    "zootoca_logo_work_copy": {
        "title": "Zootoca Logo Design",
        "pdfName": "zootoca logo work copy.pdf",
        "tag": "Logo Exploration & Concept",
        "desc": "Logo conceptualization, vector mark variations, color options, and brand application."
    },
    "digiobz_6": {
        "title": "Digiobz Logo Design",
        "pdfName": "digiobz 6.pdf",
        "tag": "Digital Agency Logo",
        "desc": "Modern digital agency logo typography and geometric icon design."
    }
}

VIDEO_BRANDS_INFO = {
    "Topaaz": {"name": "Topaaz Commercial Reels", "tag": "Commercial & Testimonials", "desc": "Product launch video, manufacturer reel, and customer testimonial video edits."},
    "BOCS PIZZA": {"name": "BOCS Pizza Theater Ad", "tag": "Cinema & Social Ad", "desc": "High-energy theater commercial video ad designed for big-screen promotional campaigns."},
    "RK Ecran": {"name": "RK Ecran Promo Video", "tag": "Product Motion Reel", "desc": "Product feature walkthrough video with engaging animated motion graphics."}
}

def generate_data():
    projects = []
    
    # 1. Graphic Design Projects
    for folder_name in sorted(os.listdir(GRAPHICS_DIR)):
        folder_path = os.path.join(GRAPHICS_DIR, folder_name)
        if not os.path.isdir(folder_path):
            continue
            
        info = GRAPHIC_BRANDS_INFO.get(folder_name, {
            "name": folder_name,
            "tag": "Graphic Design",
            "desc": f"Creative social media and promotional designs for {folder_name}."
        })
        
        images = []
        for file in sorted(os.listdir(folder_path)):
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                rel_url = f"/raw_assets/graphics/{folder_name}/{file}"
                images.append({"filename": file, "url": rel_url})
                
        if images:
            projects.append({
                "id": f"gfx-{folder_name.lower().replace(' ', '-')}",
                "category": "Graphics Design",
                "brand": info["name"],
                "folderName": folder_name,
                "title": f"{info['name']} Social & Ad Creatives",
                "tag": info["tag"],
                "description": info["desc"],
                "coverImage": images[0]["url"],
                "images": images,
                "type": "carousel" if len(images) > 1 else "static",
                "itemCount": len(images)
            })

    # 2. Logo Design & Brand Identity
    pdf_previews_files = os.listdir(PDF_PREVIEWS_DIR) if os.path.exists(PDF_PREVIEWS_DIR) else []
    
    for key, info in LOGO_GUIDELINES_INFO.items():
        pdf_path = os.path.join(LOGOS_DIR, info["pdfName"])
        pdf_url = f"/raw_assets/logos/{info['pdfName']}"
        
        pages = []
        for page_file in sorted(pdf_previews_files):
            if page_file.startswith(key) and page_file.endswith('.png'):
                page_url = f"/raw_assets/pdf_previews/{page_file}"
                pages.append({"filename": page_file, "url": page_url})
                
        pages = sorted(pages, key=lambda p: p["filename"])
        cover = pages[0]["url"] if pages else ""
        
        projects.append({
            "id": f"logo-{key}",
            "category": "Logo & Brand Identity",
            "brand": info["title"],
            "title": f"{info['title']} - Identity System",
            "tag": info["tag"],
            "description": info["desc"],
            "pdfUrl": pdf_url,
            "coverImage": cover,
            "pages": pages,
            "pageCount": len(pages),
            "type": "pdf_booklet",
            "itemCount": len(pages)
        })

    # 3. Video Editing Projects
    for folder_name in sorted(os.listdir(VIDEOS_DIR)):
        folder_path = os.path.join(VIDEOS_DIR, folder_name)
        if not os.path.isdir(folder_path):
            continue
            
        info = VIDEO_BRANDS_INFO.get(folder_name, {
            "name": folder_name,
            "tag": "Video Editing",
            "desc": f"Video edits and motion graphics for {folder_name}."
        })
        
        videos = []
        for file in sorted(os.listdir(folder_path)):
            if file.lower().endswith('.mp4'):
                rel_url = f"/raw_assets/videos/{folder_name}/{file}"
                videos.append({"filename": file, "url": rel_url, "title": file.replace('.mp4', '')})
                
        if videos:
            projects.append({
                "id": f"video-{folder_name.lower().replace(' ', '-')}",
                "category": "Video Editing",
                "brand": info["name"],
                "title": f"{info['name']} Motion Reels",
                "tag": info["tag"],
                "description": info["desc"],
                "coverImage": "",
                "videos": videos,
                "type": "video_gallery",
                "itemCount": len(videos)
            })

    output_path = os.path.join(BASE_DIR, "projectsData.json")
    with open(output_path, "w") as f:
        json.dump(projects, f, indent=2)

if __name__ == "__main__":
    generate_data()
