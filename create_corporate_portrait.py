import os
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance

def make_corporate_portrait():
    cutout_path = os.path.join('public', 'ansh_cutout.png')
    cutout = Image.open(cutout_path).convert('RGBA')

    bbox = cutout.getbbox()
    person = cutout.crop(bbox)
    pw, ph = person.size

    canvas_w = 900
    canvas_h = 1050

    # Scale person to fill comfortably and centered
    target_h = int(canvas_h * 0.94)
    target_w = int(pw * (target_h / ph))
    if target_w > int(canvas_w * 0.92):
        target_w = int(canvas_w * 0.92)
        target_h = int(ph * (target_w / pw))

    person_scaled = person.resize((target_w, target_h), Image.Resampling.LANCZOS)
    pos_x = (canvas_w - target_w) // 2
    pos_y = canvas_h - target_h  # grounded naturally at bottom

    # Create a prestigious corporate studio backdrop:
    # Classic executive look: Deep corporate navy blue (#111827 / #0f172a) with a soft, warm studio rim/backlight
    # (#1e293b / #1e3a5f corporate blue accent) behind the head and shoulders
    y_coords, x_coords = np.ogrid[:canvas_h, :canvas_w]
    light_cx = canvas_w * 0.5
    light_cy = canvas_h * 0.36

    # Elliptical distance from studio spotlight
    dist = np.sqrt(((x_coords - light_cx) / (canvas_w * 0.52)) ** 2 + ((y_coords - light_cy) / (canvas_h * 0.52)) ** 2)
    dist = np.clip(dist, 0.0, 1.0)

    # Corporate Executive Palette:
    # Center spotlight: soft executive slate/steel-blue (#2d3f59 / #334e68)
    # Outer edge: deep midnight corporate navy (#0b1120)
    r_center, g_center, b_center = 42, 60, 84    # refined executive steel-navy highlight
    r_edge, g_edge, b_edge = 11, 17, 32          # deep corporate midnight navy

    bg_r = (r_center * (1.0 - dist) + r_edge * dist).astype(np.uint8)
    bg_g = (g_center * (1.0 - dist) + g_edge * dist).astype(np.uint8)
    bg_b = (b_center * (1.0 - dist) + b_edge * dist).astype(np.uint8)

    bg_arr = np.dstack([bg_r, bg_g, bg_b])
    bg_img = Image.fromarray(bg_arr).convert('RGBA')
    bg_img = bg_img.filter(ImageFilter.GaussianBlur(radius=8))

    # Add realistic soft contact shadow for depth
    shadow_mask = person_scaled.split()[3]
    shadow = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    shadow.paste((0, 0, 0, 90), (pos_x, pos_y + 8), shadow_mask)
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=18))

    # Composite: background + shadow + centered person
    composite = Image.alpha_composite(bg_img, shadow)

    person_layer = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    person_layer.paste(person_scaled, (pos_x, pos_y))
    composite = Image.alpha_composite(composite, person_layer)

    # Crisp professional color grading
    final_rgb = composite.convert('RGB')
    final_rgb = ImageEnhance.Sharpness(final_rgb).enhance(1.1)
    final_rgb = ImageEnhance.Contrast(final_rgb).enhance(1.04)

    # Save to public/ansh.jpg and public/ansh_corporate.jpg
    ansh_path = os.path.join('public', 'ansh.jpg')
    corp_path = os.path.join('public', 'ansh_corporate.jpg')
    final_rgb.save(ansh_path, quality=96)
    final_rgb.save(corp_path, quality=96)
    print(f"Successfully generated corporate portrait at {ansh_path} and {corp_path}!")

if __name__ == '__main__':
    make_corporate_portrait()
