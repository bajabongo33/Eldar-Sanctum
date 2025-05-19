const Footer = () => (
  <footer className="bg-eldar-dark text-eldar-gold p-4 text-center">
    <div>
      <a href="https://www.facebook.com/profile.php?id=61576365003202" target="_blank" rel="noopener noreferrer">Facebook</a> | 
      <a href="https://www.instagram.com/eldar_aetherion_solis/" target="_blank" rel="noopener noreferrer">Instagram</a> | 
      <a href="https://www.tiktok.com/@eldar_aetherion_solis" target="_blank" rel="noopener noreferrer">TikTok</a>
    </div>
    <div>
      &copy; {new Date().getFullYear()} Eldar Sanctum. All rights reserved.
    </div>
  </footer>
);

export default Footer;
