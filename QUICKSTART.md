# 🚀 Quick Start Guide

## Step 1: Install Dependencies
Open your terminal in the project folder and run:
```bash
npm install
```

## Step 2: Add Your Bubble Image
1. Save your bubble image (the gradient bubble background from Figma)
2. Place it in: `src/assets/bubble.png`
3. Make sure the filename is exactly `bubble.png`

## Step 3: Run the Project
```bash
npm run dev
```

## Step 4: Open in Browser
The terminal will show a URL like: `http://localhost:5173`
Open that URL in your browser.

---

## ⚠️ Important Notes

### About the CSS Warnings
You might see warnings about `@tailwind` in your IDE. **This is normal!** These warnings appear because the IDE doesn't recognize Tailwind's special syntax. The project will work perfectly fine when you run it.

### If You Get Import Errors
If you see an error about `bubble.png` not found:
1. Make sure you've added the image to `src/assets/bubble.png`
2. Or temporarily comment out the import line in `Login.jsx` until you add the image

---

## 📝 What You'll See

- **Desktop View:** Bubble image on the left, login form on the right
- **Mobile View:** Only the login form (image is hidden on small screens)

---

## 🎨 Customization Tips

### Change the Purple Color Theme
In `src/pages/Login.jsx`, find and replace:
- `purple-600` → your color (e.g., `blue-600`, `green-600`)
- `purple-500` → your lighter shade

### Adjust Form Width
Find `max-w-md` in Login.jsx and change to:
- `max-w-sm` - Smaller form
- `max-w-lg` - Larger form
- `max-w-xl` - Extra large form

### Change Gradient Direction
Find `bg-gradient-to-r` and change to:
- `bg-gradient-to-l` - Left gradient
- `bg-gradient-to-t` - Top gradient
- `bg-gradient-to-br` - Bottom-right diagonal

---

## 🐛 Troubleshooting

**Problem:** "Cannot find module 'react'"
**Solution:** Run `npm install` again

**Problem:** Styles not showing
**Solution:** Make sure `src/index.css` exists and is imported in `main.jsx`

**Problem:** Image not showing
**Solution:** Add `bubble.png` to `src/assets/` folder

---

**Happy Coding! 🎉**
