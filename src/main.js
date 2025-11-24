import { 
  createIcons, 
  Facebook, 
  Instagram, 
  Youtube, 
  Droplets, 
  ShieldCheck, 
  Flame, 
  Hammer, 
  Palette, 
  Sprout, 
  Thermometer, 
  VolumeX, 
  CloudRain, 
  Lock, 
  Brush, 
  Sun, 
  Handshake, 
  Quote, 
  Gem, 
  Coins, 
  Clock, 
  Waves, 
  ArrowUpFromLine, 
  Home, 
  ScrollText 
} from 'lucide';
import './style.css';

// Component Injection
const headerHTML = `
  <div class="main-nav">
    <div class="container">
      <a href="/" class="logo">
        <img src="/logo.jpg" alt="Kompac Solutions Logo" id="header-logo">
        KOMPAC
      </a>
      <button class="mobile-menu-btn" aria-label="Toggle Menu">☰</button>
      <div class="nav-links">
        <a href="/">Home</a>
        <a href="/wpc.html">WPC</a>
        <a href="/upvc.html">uPVC</a>
        <a href="/epoxy.html">Epoxy</a>
        <a href="/houselifting.html">Lifting</a>
        <a href="/about.html">About</a>
        <a href="/contact.html" class="btn btn-primary" style="padding: 0.5rem 1.5rem; color: white; margin-left: 1rem;">Contact Us</a>
      </div>
    </div>
  </div>
`;

const footerHTML = `
  <div class="container">
    <div class="grid grid-4">
      <div>
        <div class="logo" style="color: white; margin-bottom: 1.5rem;">
          KOMPAC
        </div>
        <p style="font-size: 0.9rem;">Premium WPC, uPVC, and Construction Solutions in Chennai. Trusted by 500+ clients over 20 years.</p>
        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
          <a href="#" aria-label="Facebook"><i data-lucide="facebook"></i></a>
          <a href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a>
          <a href="#" aria-label="Youtube"><i data-lucide="youtube"></i></a>
        </div>
      </div>
      <div>
        <h4>Products</h4>
        <ul>
          <li><a href="/wpc.html">WPC Doors & Windows</a></li>
          <li><a href="/upvc.html">uPVC Windows</a></li>
          <li><a href="/epoxy.html">Epoxy Coating</a></li>
          <li><a href="/houselifting.html">House Lifting</a></li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/contact.html">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div>
        <h4>Get in Touch</h4>
        <p><a href="https://maps.app.goo.gl/HFNUYmjhyw9XuymR7" target="_blank" style="color: inherit; text-decoration: none;">No: 2/325, 3rd Cross St,<br>Ranjith Nagar, Neelankarai,<br>Chennai, Tamil Nadu 6000115, India.</a></p>
        <p style="margin-top: 1rem;"><strong>Phone:</strong> <a href="tel:+919498337083">+91 94983 37083</a></p>
        <p><strong>Email:</strong> <a href="mailto:Kompactradingcompany@gmail.com">Kompactradingcompany@gmail.com</a></p>
      </div>
    </div>
    <div class="text-center" style="margin-top: 3rem; border-top: 1px solid #374151; padding-top: 1.5rem; font-size: 0.875rem; color: #6b7280;">
      <p>&copy; ${new Date().getFullYear()} Kompac Solutions. All rights reserved.</p>
    </div>
  </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  try {
    // Inject Header
    const header = document.querySelector('header');
    if (header) {
      header.innerHTML = headerHTML;

      // Highlight active link
      const currentPath = window.location.pathname;
      const links = header.querySelectorAll('.nav-links a');
      links.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/')) {
          link.classList.add('active');
        }
      });

      // Mobile Menu
      const menuBtn = header.querySelector('.mobile-menu-btn');
      const navLinks = header.querySelector('.nav-links');
      if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
          navLinks.classList.toggle('open');
        });
      }
    } else {
      console.error('Header element not found');
    }

    // Inject Footer
    const footer = document.querySelector('footer');
    if (footer) {
      footer.innerHTML = footerHTML;
    } else {
      console.error('Footer element not found');
    }

    // Scroll Animations
    const fadeElements = document.querySelectorAll('.fade-in-up');
    if (fadeElements.length > 0) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      }, observerOptions);

      fadeElements.forEach(el => {
        observer.observe(el);
      });
    }

    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });

    // Initialize Lucide Icons
    try {
      createIcons({ 
        icons: {
          Facebook,
          Instagram,
          Youtube,
          Droplets,
          ShieldCheck,
          Flame,
          Hammer,
          Palette,
          Sprout,
          Thermometer,
          VolumeX,
          CloudRain,
          Lock,
          Brush,
          Sun,
          Handshake,
          Quote,
          Gem,
          Coins,
          Clock,
          Waves,
          ArrowUpFromLine,
          Home,
          ScrollText
        }
      });
    } catch (e) {
      console.error('Failed to initialize Lucide icons:', e);
    }

  } catch (error) {
    console.error('Error in main.js:', error);
  }
});
