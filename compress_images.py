#!/usr/bin/env python3
import os
import glob
import subprocess
import sys
from pathlib import Path
from PIL import Image
import io

def install_pillow():
    try:
        subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'pillow'])
        print("✓ Pillow installed.")
    except subprocess.CalledProcessError:
        print("✗ Failed to install Pillow.")
        sys.exit(1)

def get_size_mb(file_path):
    return os.path.getsize(file_path) / (1024 * 1024)

def compress_image(input_path, output_path):
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if RGBA/PALA
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            
            # Resize if too large (max 2000px long edge for web)
            max_size = 2000
            img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
            
            # Save as WebP quality 95 (near-lossless, small size)
            img.save(output_path, 'WEBP', quality=95, method=6)
            print(f"✓ Compressed: {input_path.name}")
            return True
    except Exception as e:
        print(f"✗ Error compressing {input_path}: {e}")
        return False

def main():
    print("Image Compression Script for public/ (max 600KB, WebP output)")
    install_pillow()
    
    cwd = Path.cwd()
    public_dir = cwd / 'public'
    if not public_dir.exists():
        print("✗ public/ not found.")
        return
    
    # Patterns for images
    patterns = ['*.webp', '*.jpg', '*.jpeg', '*.png', '*.gif', '*.bmp', '*.tiff']
    images = []
    for pattern in patterns:
        images.extend(public_dir.rglob(pattern))
    
    print(f"Found {len(images)} images.")
    compressed_count = 0
    
    for img_path in images:
        size_mb = get_size_mb(img_path)
        if size_mb > 0.6:  # >600KB
            print(f"Large image ({size_mb:.1f}MB): {img_path}")
            out_path = img_path.parent / f"{img_path.stem}_compressed.webp"
            if compress_image(img_path, out_path):
                new_size_mb = get_size_mb(out_path)
                print(f"  -> New size: {new_size_mb:.1f}MB ({size_mb:.1f}MB -> {new_size_mb:.1f}MB)")
                compressed_count += 1
        else:
            print(f"OK size ({size_mb:.1f}MB): {img_path}")
    
    print(f"\nDone! Compressed {compressed_count} images. Backups in _compressed.webp files.")

if __name__ == '__main__':
    main()
