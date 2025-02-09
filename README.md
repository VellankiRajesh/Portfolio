# Personal Portfolio Website

A modern, responsive portfolio website built with React and modern CSS animations. Features a clean design with dark/light theme support and smooth transitions.

## 🚀 Live Demo

[View Live Demo](https://your-portfolio-url.netlify.app)

## ✨ Features

- Responsive design that works on all devices
- Dark/Light theme support
- Modern UI with smooth animations
- Project showcase with live demos and GitHub links
- Contact form with email integration
- Intersection Observer for scroll animations
- Image lazy loading for better performance

## 🛠️ Built With

- React.js
- CSS3 with modern features
- EmailJS for contact form
- Intersection Observer API
- React Icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn

## 🔧 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_USER_ID=your_user_id
   ```

5. Start the development server:
   ```bash
   npm start
   ```

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── profile.png
│   │   ├── portfolio.png
│   │   ├── hate.png
│   │   ├── Sales.png
│   │   └── credit.png
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.js
│   └── index.js
└── package.json
```

## 🖼️ Image Handling

For proper image handling in development and production:

1. Store all images in `src/assets/` directory
2. Import images in components:
   ```javascript
   import profileImg from "../assets/profile.png";
   ```
3. Use imported images in your components:
   ```javascript
   <img src={profileImg} alt="Profile" />
   ```

## 🚀 Deployment

To deploy on Netlify:

1. Build your project:
   ```bash
   npm run build
   ```

2. Configure Netlify deployment:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Environment variables: Add your EmailJS credentials

3. Deploy:
   - Connect your GitHub repository to Netlify
   - Configure your build settings
   - Deploy!

## 🎨 Customization

1. Theme Colors:
   - Edit CSS variables in `src/index.css`
   - Modify color schemes for light/dark themes

2. Content:
   - Update project information in `Projects.jsx`
   - Modify personal information in `About.jsx`
   - Customize contact form in `Contact.jsx`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/yourusername/portfolio/issues).

## 👨‍💻 Author

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- React.js team for the amazing framework
- EmailJS for the email service integration
- All contributors who helped improve this project
