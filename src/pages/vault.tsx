import Layout from '../components/Layout';

export default function Vault() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold text-eldar-gold mb-4">Vault</h2>
      <p>
        Explore Eldar's creations and products:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <a href="https://www.redbubble.com/people/EldarsCreatures/shop?asc=u" target="_blank" rel="noopener noreferrer" className="text-eldar-gold underline">
            Redbubble Shop
          </a>
        </li>
      </ul>
    </Layout>
  );
}
