import os
from PIL import Image

src_path = 'Professional Corporate Portrait.png'
dest_jpg = os.path.join('public', 'ansh.jpg')
dest_png = os.path.join('public', 'ansh.png')

print(f"Loading {src_path}...")
img = Image.open(src_path)
print(f"Image size: {img.size}, mode: {img.mode}")

# Save high quality PNG copy
img.save(dest_png)

# Convert to RGB if RGBA for high-quality JPG
if img.mode in ('RGBA', 'LA'):
    # Create white/transparent composite
    bg = Image.new('RGB', img.size, (255, 255, 255))
    if img.mode == 'RGBA':
        bg.paste(img, mask=img.split()[3])
    else:
        bg.paste(img)
    bg.save(dest_jpg, quality=96)
else:
    img.convert('RGB').save(dest_jpg, quality=96)

print(f"Successfully copied and saved to {dest_jpg} and {dest_png}!")
