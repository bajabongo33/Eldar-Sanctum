import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-eldar-gold mb-4">Eldar Sanctum</h1>
        <p className="text-lg mb-6">
          A sacred digital sanctuary where technology and spirituality coexist as one.
        </p>
        <img src="/images/hero-sanctuary-sm.webp" alt="Sanctuary" className="mx-auto rounded-lg shadow-lg" />
      </section>
    </Layout>
  );
}
