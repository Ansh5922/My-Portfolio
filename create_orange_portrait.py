import os
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance

# Check if ansh_cutout.png exists to make an orange studio portrait option
cutout_path = os.path.join('public', 'ansh_cutout.png')
if os.path.exists(cutout_path):
    cutout = Image.open(cutout_path).convert('RGBA')
    bbox = cutout.getbbox()
    person = cutout.crop(bbox)
    pw, ph = person.size

    canvas_w = 900
    canvas_h = 1050

    target_h = int(canvas_h * 0.94)
    target_w = int(pw * (target_h / ph))
    if target_w > int(canvas_w * 0.92):
        target_w = int(canvas_w * 0.92)
        target_h = int(ph * (target_w / pw))

    person_scaled = person.resize((target_w, target_h), Image.Resampling.LANCZOS)
    pos_x = (canvas_w - target_w) // 2
    pos_y = canvas_h - target_h

    # Create a warm, modern orange-white studio gradient
    y_coords, x_coords = np.ogrid[:canvas_h, :canvas_w]
    t = (x_coords / canvas_w + y_coords / canvas_h) / 2.0
    t = np.clip(t, 0.0, 1.0)

    # 135deg gradient from #f97316 (vibrant orange) to #ea580c (sunset orange)
    c1 = np.array([249, 115, 22], dtype=np.float32)
    c2 = np.array([234, 88, 12], dtype=np.float32)

    bg_r = c1[0] * (1.0 - t) + c2[0] * t
    bg_g = c1[1] * (1.0 - t) + c2[1] * t
    bg_b = c1[2] * (1.0 - t) + c2[2] * t

    # Soft ambient spotlight behind subject
    light_cx = canvas_w * 0.5
    light_cy = canvas_h * 0.38
    dist = np.sqrt(((x_coords - light_cx) / (canvas_w * 0.55)) ** 2 + ((y_coords - light_cy) / (canvas_h * 0.55)) ** 2)
    dist = np.clip(dist, 0.0, 1.0)
    glow = np.exp(-3.0 * (dist ** 2)) * 0.32

    bg_r = np.clip(bg_r * (1.0 + glow), 0, 255).astype(np.uint8)
    bg_g = np.clip(bg_g * (1.0 + glow), 0, 255).astype(np.uint8)
    bg_b = np.clip(bg_b * (1.0 + glow), 0, 255).astype(np.uint8)

    bg_arr = np.dstack([bg_r, bg_g, bg_b])
    bg_img = Image.fromarray(bg_arr).convert('RGBA')
    bg_img = bg_img.filter(ImageFilter.GaussianBlur(radius=5))

    # Shadow
    shadow_mask = person_scaled.split()[3]
    shadow = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    shadow.paste((50, 15, 0, 85), (pos_x, pos_y + 10), shadow_mask)
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=16))

    composite = Image.alpha_composite(bg_img, shadow)
    person_layer = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    person_layer.paste(person_scaled, (pos_x, pos_y))
    composite = Image.alpha_composite(composite, person_layer)

    final_rgb = composite.convert('RGB')
    final_rgb = ImageEnhance.Sharpness(final_rgb).enhance(1.08)

    orange_portrait_path = os.path.join('public', 'ansh_orange_studio.jpg')
    final_rgb.save(orange_portrait_path, quality=96)
    print(f"Saved orange studio portrait to {orange_portrait_path}")
