# Ninja DAM - Login Page

A modern, responsive login page built with React.js and Tailwind CSS, based on Figma design.

## 📁 Project Structure

```
aaradhyadharma-login/
├── src/
│   ├── assets/          # Images and static files
│   │   └── bubble.png   # Bubble background image (add your image here)
│   ├── components/      # Reusable components (currently empty)
│   ├── pages/           # Main page components
│   │   └── Login.jsx    # Login page component
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind CSS imports
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Bubble Image

Place your bubble image (the gradient bubble background) in the `src/assets/` folder and name it `bubble.png`.

**Important:** The image should be saved as `src/assets/bubble.png`

### 3. Run Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

## ✨ Features

### Login Form Includes:
- ✅ Email input field with validation
- ✅ Password input field with show/hide toggle
- ✅ "Forgot Password?" link
- ✅ Sign In button with gradient background
- ✅ "Sign in with Google" button
- ✅ "Don't have an account? Register" link
- ✅ Password requirements display
- ✅ Support contact information

### Design Features:
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Two-column layout (image left, form right)
- ✅ Gradient backgrounds matching Figma design
- ✅ Smooth transitions and hover effects
- ✅ Modern UI with rounded corners and shadows
- ✅ All Tailwind classes are inline in JSX

### Responsive Behavior:
- **Desktop (lg and above):** Two-column layout with bubble image on left
- **Mobile/Tablet:** Single column with form only (image hidden)

## 🎨 Tailwind CSS

All styling is done using **inline Tailwind CSS classes** directly in the JSX components. No separate CSS files are needed (except for the base Tailwind imports in `index.css`).

### Key Tailwind Classes Used:
- **Layout:** `flex`, `grid`, `min-h-screen`
- **Spacing:** `p-6`, `m-4`, `gap-3`
- **Colors:** `bg-purple-600`, `text-white`, `border-gray-300`
- **Gradients:** `bg-gradient-to-r from-purple-600 to-purple-500`
- **Responsive:** `lg:flex`, `lg:w-1/2`, `md:p-8`
- **Effects:** `hover:`, `focus:`, `transition-all`, `shadow-lg`

## 📝 Customization

### Change Colors:
All colors are defined inline. Search for color classes like:
- `purple-600` → Change to your brand color
- `blue-500` → Change link colors
- `gray-300` → Change border colors

### Modify Layout:
- Adjust `lg:w-1/2` to change the split ratio
- Change `max-w-md` to adjust form width
- Modify padding classes (`p-6`, `p-12`) for spacing

### Add Components:
Create reusable components in the `src/components/` folder, such as:
- `Button.jsx` - Reusable button component
- `Input.jsx` - Reusable input field component
- `Logo.jsx` - Logo component

## 🔧 Technologies Used

- **React 18.2** - UI library
- **Vite 5.0** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

## 📱 Browser Support

Works on all modern browsers:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Next Steps

1. Add routing (React Router) for navigation
2. Implement actual authentication logic
3. Add form validation library (e.g., React Hook Form, Formik)
4. Connect to backend API
5. Add loading states and error handling
6. Create signup page
7. Add forgot password functionality

## 📄 License

This project is for educational/portfolio purposes.

---

**Need Help?** Contact support@ninjadam.com
