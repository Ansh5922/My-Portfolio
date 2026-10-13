import os
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance

def make_button_gradient_portrait():
    cutout_path = os.path.join('public', 'ansh_cutout.png')
    cutout = Image.open(cutout_path).convert('RGBA')

    bbox = cutout.getbbox()
    person = cutout.crop(bbox)
    pw, ph = person.size

    canvas_w = 900
    canvas_h = 1050

    # Scale person to fit nicely in the frame
    target_h = int(canvas_h * 0.94)
    target_w = int(pw * (target_h / ph))
    if target_w > int(canvas_w * 0.92):
        target_w = int(canvas_w * 0.92)
        target_h = int(ph * (target_w / pw))

    person_scaled = person.resize((target_w, target_h), Image.Resampling.LANCZOS)
    pos_x = (canvas_w - target_w) // 2
    pos_y = canvas_h - target_h  # align nicely to bottom

    # Create the exact 135-degree linear gradient from #16a34a to #0d9488
    # #16a34a = (22, 163, 74)
    # #0d9488 = (13, 148, 136)
    # At 135 degrees: (x + y) / (w + h)
    y_coords, x_coords = np.ogrid[:canvas_h, :canvas_w]
    t = (x_coords / canvas_w + y_coords / canvas_h) / 2.0
    t = np.clip(t, 0.0, 1.0)

    c1 = np.array([22, 163, 74], dtype=np.float32)   # #16a34a (green)
    c2 = np.array([13, 148, 136], dtype=np.float32)  # #0d9488 (teal)

    # Base 135deg gradient
    bg_r = c1[0] * (1.0 - t) + c2[0] * t
    bg_g = c1[1] * (1.0 - t) + c2[1] * t
    bg_b = c1[2] * (1.0 - t) + c2[2] * t

    # Add a soft, subtle radial backlight highlight right behind head & shoulders
    # so the subject has beautiful studio depth and doesn't get lost
    light_cx = canvas_w * 0.5
    light_cy = canvas_h * 0.38
    dist = np.sqrt(((x_coords - light_cx) / (canvas_w * 0.55)) ** 2 + ((y_coords - light_cy) / (canvas_h * 0.55)) ** 2)
    dist = np.clip(dist, 0.0, 1.0)
    
    # Soft ambient glow (brightens slightly toward center for studio quality)
    glow = np.exp(-3.0 * (dist ** 2)) * 0.28  # gentle 28% luminance boost
    bg_r = np.clip(bg_r * (1.0 + glow), 0, 255).astype(np.uint8)
    bg_g = np.clip(bg_g * (1.0 + glow), 0, 255).astype(np.uint8)
    bg_b = np.clip(bg_b * (1.0 + glow), 0, 255).astype(np.uint8)

    bg_arr = np.dstack([bg_r, bg_g, bg_b])
    bg_img = Image.fromarray(bg_arr).convert('RGBA')
    bg_img = bg_img.filter(ImageFilter.GaussianBlur(radius=4))

    # Add subtle soft shadow behind person for realistic lighting
    shadow_mask = person_scaled.split()[3]
    shadow = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    shadow.paste((5, 40, 25, 75), (pos_x, pos_y + 10), shadow_mask)
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=16))

    # Composite: background + shadow + centered person
    final_img = Image.alpha_composite(bg_img, shadow)

    person_layer = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    person_layer.paste(person_scaled, (pos_x, pos_y))
    final_img = Image.alpha_composite(final_img, person_layer)

    # Convert to RGB with crisp quality
    final_rgb = final_img.convert('RGB')
    final_rgb = ImageEnhance.Sharpness(final_rgb).enhance(1.08)

    # Save to public/ansh.jpg
    target_path = os.path.join('public', 'ansh.jpg')
    final_rgb.save(target_path, quality=96)
    print(f"Successfully saved button-gradient portrait to {target_path}!")

if __name__ == '__main__':
    make_button_gradient_portrait()
