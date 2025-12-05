# Adding College Logo and Background Images

## How to Add Your College Logo and Background Images

Since you have local images on your computer, you'll need to add them to this project. Here's how:

### Option 1: Using the Figma Make Interface
1. Look for an **image upload** feature in the Figma Make interface
2. Upload your images:
   - College Logo: `hcst-logo-1.png`
   - Background Image: `DJI_0037-e1557146143247.jpg`
3. Once uploaded, the system will provide you with asset URLs that you can use

### Option 2: Manual Integration Instructions

If you're deploying this application to a server, follow these steps:

1. **Create a public assets folder** in your project root:
   ```
   /public
     /images
       - hcst-logo-1.png (your college logo)
       - DJI_0037-e1557146143247.jpg (your background image)
   ```

2. **Update the code to use your images**:

#### For the Login Page (`/components/LoginPage.tsx`):

Replace line 19 (background image):
```tsx
// Current
src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a..."

// Replace with
src="/images/DJI_0037-e1557146143247.jpg"
```

Replace line 45-48 (college logo):
```tsx
// Current
<div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md border-2 border-blue-600">
  <GraduationCap className="w-10 h-10 text-blue-600" />
</div>

// Replace with
<ImageWithFallback
  src="/images/hcst-logo-1.png"
  alt="HIMCS Logo"
  className="w-16 h-16 object-contain"
/>
```

#### For the Student Dashboard (`/components/student/Dashboard.tsx`):

Replace line 112-116 (logo in header):
```tsx
// Current
<div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
  <GraduationCap className="w-8 h-8 text-white" />
</div>

// Replace with
<ImageWithFallback
  src="/images/hcst-logo-1.png"
  alt="HIMCS Logo"
  className="w-14 h-14 object-contain rounded-lg bg-white p-2"
/>
```

### Image Specifications

For best results, ensure your images meet these specifications:

**College Logo (hcst-logo-1.png)**:
- Format: PNG with transparent background (recommended)
- Recommended size: 200x200 pixels
- Aspect ratio: 1:1 (square)

**Background Image (DJI_0037-e1557146143247.jpg)**:
- Format: JPG or PNG
- Recommended size: 1920x1080 pixels or larger
- Aspect ratio: 16:9 (landscape)
- Quality: High resolution for best appearance

### Customizing the Image Slider

To add your college images to the slider in `/components/ImageSlider.tsx`:

1. Upload your college images to `/public/images/`
2. Edit the `defaultSlides` array starting at line 14:

```tsx
const defaultSlides: Slide[] = [
  {
    id: 1,
    image: '/images/college-library.jpg',  // Your college library photo
    title: 'Library Services',
    description: 'Manage your issued books, reissues, and fine payments online'
  },
  {
    id: 2,
    image: '/images/college-building.jpg',  // Your college building photo
    title: 'No Dues Certificate',
    description: 'Clear all departmental dues in one centralized portal'
  },
  // Add more slides with your college images...
];
```

### Need Help?

If you need assistance with:
- Image optimization
- Responsive image sizing
- Adding more custom images
- Creating an admin panel to upload images

Feel free to ask for additional modifications!

---

## Current Image Placeholders

The application currently uses these placeholder images from Unsplash:
- University campus photos
- Education building photos
- Library photos
- Graduation ceremony photos

Replace these with actual HIMCS college photos for a more authentic look!
