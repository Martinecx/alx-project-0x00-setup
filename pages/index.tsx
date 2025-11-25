import ListingCard from '../components/ListingCard';
import { Listing } from '../interfaces/listing';

const sampleListing: Listing = {
  id: '1',
  title: 'Cozy Studio in the City',
  location: 'Nairobi, Kenya',
  pricePerNight: 45,
  rating: 4.3,
  imageSrc: '/sample-house.jpg',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Listings</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ListingCard listing={sampleListing} />
        <ListingCard listing={{ ...sampleListing, id: '2', title: 'Modern Studio Downtown' }} />
        <ListingCard listing={{ ...sampleListing, id: '3', title: 'Quiet Loft Near Park' }} />
      </section>
    </main>
  );
}
