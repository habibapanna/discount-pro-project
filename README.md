# Discount PRO

## Purpose
Discount PRO is a web-based coupon-collecting application that helps users find and use discount coupons from popular e-commerce stores in Bangladesh. Users can sign up, log in, and browse available coupons for different brands, providing a convenient way to save money on their purchases.

## Live URL
Live Demo of Discount PRO (https://b10-a9-my-first-firebase-assignment.surge.sh)

## Key Features
- **User Authentication**: Users can register and log in using email/password or via Google Sign-In, powered by Firebase Authentication
- **Responsive Design**: The app is designed to be fully responsive, ensuring a seamless user experience across all devices.
- **Dynamic Coupon Management**: Displays coupons in a grid format with options to copy codes and use them directly on the respective brand's site.
- **Search and Filter Functionality**: Users can search for specific brands and filter results.
- **Protected Routes**: Pages like the user profile and coupon details are protected and accessible only to authenticated users.
- **Toast Notifications**: Real-time feedback on user actions using `react-toastify` for success and error messages.
- **User Profile**: A personalized profile page showing user details.
- **Top Brands Carousel**: Animated display of top brands with interactive hover effects using `react-fast-marquee`.

## npm Packages Used
- **React**: Core library for building the user interface.
- **react-router-dom**: For handling routing and navigation in the app.
- **firebase**: Used for authentication and backend functionality.
- **react-toastify**: For displaying toast notifications.
- **react-copy-to-clipboard**: Simplifies copying coupon codes to the clipboard.
- **react-fast-marquee**: Adds a marquee effect for the Top Brands section.
- **tailwindcss**: For styling the app and maintaining a modern UI.

## How to Run the Project Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/discount-pro.git
   cd discount-pro
