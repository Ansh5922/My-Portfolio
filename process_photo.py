import os
import rembg
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance

def create_professional_portrait():
    input_path = 'myphoto.jpg'
    print(f"Loading {input_path}...")
    orig_img = Image.open(input_path).convert('RGB')
    orig_w, orig_h = orig_img.size
    print(f"Original image size: {orig_w}x{orig_h}")

    # Step 1: Remove background using rembg
    print("Extracting foreground using rembg (u2net)...")
    cutout = rembg.remove(orig_img)
    cutout_path = os.path.join('public', 'ansh_cutout.png')
    cutout.save(cutout_path)
    print(f"Saved transparent cutout to {cutout_path}")

    # Step 2: Create a sleek, modern professional studio gradient background
    # Dimensions match cutout
    w, h = cutout.size

    # Let's create an array for a high-end studio portrait background:
    # A soft, elegant radial gradient with deep navy/charcoal and a subtle soft teal/emerald studio backlight
    # Center of lighting behind upper chest/head (around 0.45 * w, 0.35 * h)
    y_coords, x_coords = np.ogrid[:h, :w]
    light_cx, light_cy = w * 0.5, h * 0.38
    
    # Normalized distance from light center (elliptical for portrait aspect)
    dist = np.sqrt(((x_coords - light_cx) / (w * 0.65)) ** 2 + ((y_coords - light_cy) / (h * 0.65)) ** 2)
    dist = np.clip(dist, 0.0, 1.0)

    # Professional palette:
    # Center glow: sleek soft slate teal (#1e293b / subtle cyan-slate glow #1a3644)
    # Edge: rich dark executive charcoal (#0f172a)
    r_center, g_center, b_center = 28, 48, 56     # sophisticated dark cyan-slate glow
    r_edge, g_edge, b_edge = 15, 23, 42           # deep elegant navy/charcoal (#0f172a)

    bg_r = (r_center * (1.0 - dist) + r_edge * dist).astype(np.uint8)
    bg_g = (g_center * (1.0 - dist) + g_edge * dist).astype(np.uint8)
    bg_b = (b_center * (1.0 - dist) + b_edge * dist).astype(np.uint8)

    bg_arr = np.dstack([bg_r, bg_g, bg_b])
    bg_img = Image.fromarray(bg_arr).convert('RGBA')

    # Apply soft blur to background to ensure ultra-smooth gradient
    bg_img = bg_img.filter(ImageFilter.GaussianBlur(radius=8))

    # Composite cutout over studio background
    composite_dark = Image.alpha_composite(bg_img, cutout).convert('RGB')
    
    # Enhance slightly for crisp professional finish
    sharpness = ImageEnhance.Sharpness(composite_dark)
    composite_dark = sharpness.enhance(1.1)

    dark_path = os.path.join('public', 'ansh_dark_studio.jpg')
    composite_dark.save(dark_path, quality=95)
    print(f"Saved dark studio portrait to {dark_path}")

    # Also create a Clean Modern Light Studio Background (soft grey/white with subtle green studio accent)
    # Very popular for tech portfolios / LinkedIn
    r_light_c, g_light_c, b_light_c = 241, 245, 249  # light slate center
    r_light_e, g_light_e, b_light_e = 226, 232, 240  # soft border
    
    bg_light_r = (r_light_c * (1.0 - dist) + r_light_e * dist).astype(np.uint8)
    bg_light_g = (g_light_c * (1.0 - dist) + g_light_e * dist).astype(np.uint8)
    bg_light_b = (b_light_c * (1.0 - dist) + b_light_e * dist).astype(np.uint8)

    bg_light_arr = np.dstack([bg_light_r, bg_light_g, bg_light_b])
    bg_light_img = Image.fromarray(bg_light_arr).convert('RGBA')
    bg_light_img = bg_light_img.filter(ImageFilter.GaussianBlur(radius=8))

    composite_light = Image.alpha_composite(bg_light_img, cutout).convert('RGB')
    composite_light = ImageEnhance.Sharpness(composite_light).enhance(1.1)
    
    light_path = os.path.join('public', 'ansh_light_studio.jpg')
    composite_light.save(light_path, quality=95)
    print(f"Saved light studio portrait to {light_path}")

    # Also create the default ansh.jpg with the dark executive studio background
    final_ansh_path = os.path.join('public', 'ansh.jpg')
    composite_dark.save(final_ansh_path, quality=96)
    print(f"Overwrote {final_ansh_path} with professional studio portrait!")

if __name__ == '__main__':
    create_professional_portrait()
