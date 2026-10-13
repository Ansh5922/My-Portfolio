import os
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance

def make_centered_green_gradient_portrait():
    cutout_path = os.path.join('public', 'ansh_cutout.png')
    cutout = Image.open(cutout_path).convert('RGBA')
    
    # Get exact bounding box of the person
    bbox = cutout.getbbox()
    print("Bounding box of person:", bbox)
    # bbox is (left, upper, right, lower)
    person = cutout.crop(bbox)
    pw, ph = person.size
    print(f"Person size: {pw}x{ph}")

    # We want a portrait canvas (e.g. 800 x 960 or similar aspect ratio 4:5 or 1:1)
    # Let's frame the portrait nicely: chest/waist up, centered horizontally and vertically
    # Let's create canvas size
    canvas_w = 900
    canvas_h = 1050

    # Scale person so they fill the canvas comfortably centered (about 88-92% of canvas height)
    target_h = int(canvas_h * 0.94)
    target_w = int(pw * (target_h / ph))
    
    # If target_w is too wide, fit by width
    if target_w > int(canvas_w * 0.92):
        target_w = int(canvas_w * 0.92)
        target_h = int(ph * (target_w / pw))

    person_scaled = person.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Center horizontally and position vertically so bottom sits nicely at or near bottom
    pos_x = (canvas_w - target_w) // 2
    pos_y = canvas_h - target_h  # align to bottom so it looks grounded and natural

    # Create light green gradient background:
    # A beautiful, soft modern radial / diagonal gradient
    # Center glow: fresh mint light green (e.g. #f0fdf4 / #dcfce7 / #bbf7d0)
    # Outer / edge: smooth pastel sage/emerald (e.g. #86efac / #a7f3d0 / #bbf7d0)
    y_coords, x_coords = np.ogrid[:canvas_h, :canvas_w]
    
    # Radial lighting center right behind head/upper body
    light_cx = canvas_w * 0.5
    light_cy = canvas_h * 0.38
    
    dist = np.sqrt(((x_coords - light_cx) / (canvas_w * 0.65)) ** 2 + ((y_coords - light_cy) / (canvas_h * 0.65)) ** 2)
    dist = np.clip(dist, 0.0, 1.0)

    # Gradient colors:
    # Inner glow: very clean, bright light mint (#f2fcf5 -> 242, 252, 245)
    # Outer soft green: elegant sage/mint green (#bbf7d0 -> 187, 247, 208 or #c7f9cc -> 199, 249, 204)
    r_center, g_center, b_center = 245, 254, 248  # Ultra-clean soft white-mint center
    r_edge, g_edge, b_edge = 187, 242, 204        # Beautiful soft light green gradient edge

    bg_r = (r_center * (1.0 - dist) + r_edge * dist).astype(np.uint8)
    bg_g = (g_center * (1.0 - dist) + g_edge * dist).astype(np.uint8)
    bg_b = (b_center * (1.0 - dist) + b_edge * dist).astype(np.uint8)

    bg_arr = np.dstack([bg_r, bg_g, bg_b])
    bg_img = Image.fromarray(bg_arr).convert('RGBA')
    bg_img = bg_img.filter(ImageFilter.GaussianBlur(radius=6))

    # Optional subtle soft drop shadow behind the person for depth
    shadow_mask = person_scaled.split()[3]
    shadow = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    # Place shadow slightly offset
    shadow.paste((16, 163, 74, 35), (pos_x, pos_y + 8), shadow_mask)
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=12))

    # Composite: background + shadow + centered person
    final_img = Image.alpha_composite(bg_img, shadow)
    
    person_layer = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    person_layer.paste(person_scaled, (pos_x, pos_y))
    final_img = Image.alpha_composite(final_img, person_layer)

    # Convert to RGB with crisp quality
    final_rgb = final_img.convert('RGB')
    final_rgb = ImageEnhance.Sharpness(final_rgb).enhance(1.08)

    # Overwrite public/ansh.jpg
    target_path = os.path.join('public', 'ansh.jpg')
    final_rgb.save(target_path, quality=96)
    print(f"Successfully saved centered light green gradient portrait to {target_path}!")

    # Also save as ansh_green_studio.jpg for backup
    backup_path = os.path.join('public', 'ansh_green_studio.jpg')
    final_rgb.save(backup_path, quality=96)

if __name__ == '__main__':
    make_centered_green_gradient_portrait()
