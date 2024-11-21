
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.imgur.com', // Allow images from imgur
      'imgur.com', // Allow images from imgur
      'countdown-timer.vercel.app', // Allow images from Countdown Timer
      'giaic-student-card.vercel.app', // Allow images from GIAIC Student Card
      'weather-widget.vercel.app', // Allow images from Weather Widget
      'birthday-wish-app.vercel.app' // Allow images from Birthday Wish App
    ],
  },
};

export default nextConfig; // Ensure you export the configuration correctly


