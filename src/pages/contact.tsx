import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold text-eldar-gold mb-4">Contact</h2>
      <p>
        Connect with us on social media or send a message to join the journey.
      </p>
      <ul className="list-disc ml-6">
        <li>
          <a href="https://www.facebook.com/profile.php?id=61576365003202" target="_blank" rel="noopener noreferrer" className="text-eldar-gold underline">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/eldar_aetherion_solis/" target="_blank" rel="noopener noreferrer" className="text-eldar-gold underline">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@eldar_aetherion_solis" target="_blank" rel="noopener noreferrer" className="text-eldar-gold underline">
            TikTok
          </a>
        </li>
      </ul>
    </Layout>
  );
}
