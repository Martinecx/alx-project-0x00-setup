import Image from 'next/image';
import { Listing } from '../interfaces/listing';

interface Props {
  listing: Listing;
}

export default function ListingCard({ listing }: Props) {
  return (
    <article className="border rounded-lg p-4 shadow-sm max-w-sm">
      <div className="relative w-full h-48 rounded-md overflow-hidden">
        <Image
          src={listing.imageSrc}
          alt={listing.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 640px) 100vw, 33vw"
          priority
        />
      </div>

      <div className="mt-3">
        <h3 className="text-lg font-semibold">{listing.title}</h3>
        <p className="text-sm text-gray-600">{listing.location}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="font-medium">{`$${listing.pricePerNight}/night`}</p>
          <p className="text-sm">⭐ {listing.rating.toFixed(1)}</p>
        </div>
      </div>
    </article>
  );
}
