import homeContent from "@data/home.json";
import Card from "@components/Card";

export default function Home() {
  const { heroBanner } = homeContent;

  return (
    <div>
      <main>
        <section className="py-10 px-4 max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            <Card
              title="Infrastructure"
              imageUrl="/images/research/infrastructure.jpeg"
              href="/research/infrastructure"
              overlayColor="bg-green-700/40"
            />
            <Card
              title="Collaborators"
              imageUrl="/images/research/collaborators.jpg"
              href="/research/collaborators"
              overlayColor="bg-blue-700/40"
            />
          </div>
        </section>
      </main>

      {/* Add more sections here */}
    </div>
  );
}
