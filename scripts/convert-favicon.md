# Optional: Create Additional Favicon Formats

For maximum browser compatibility, you can convert your `favicon.svg` to additional formats:

## Using Online Tools (Easiest):
1. Visit [favicon.io](https://favicon.io/favicon-converter/)
2. Upload your `public/favicon.svg`
3. Download the generated files
4. Add to your `public/` folder:
   - `favicon.ico` (16x16, 32x32)
   - `favicon-16x16.png`
   - `favicon-32x32.png` 
   - `apple-touch-icon.png` (180x180)

## Using ImageMagick (Command Line):
```bash
# Install ImageMagick first
# macOS: brew install imagemagick
# Ubuntu: sudo apt-get install imagemagick

# Convert SVG to different formats
magick public/favicon.svg -resize 32x32 public/favicon-32x32.png
magick public/favicon.svg -resize 16x16 public/favicon-16x16.png
magick public/favicon.svg -resize 180x180 public/apple-touch-icon.png
magick public/favicon.svg public/favicon.ico
```

## Update HTML (if using PNG files):
Add to `index.html` head section:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

**Note:** The current SVG-only setup should work fine on Netlify with the new headers configuration! 