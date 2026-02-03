'use client';

import Marquee from "react-fast-marquee";
import Image from "next/image";

type Brand = {
  name: string;
  logo: string; // path to your logo image
};

const brands: Brand[] = [
  { name: "Nike", logo: "/brands/nike.png" },
  { name: "Adidas", logo: "/brands/adidas.png" },
  { name: "Puma", logo: "/brands/puma.png" },
  { name: "Reebok", logo: "/brands/reebok.png" },
  { name: "New Balance", logo: "/brands/newbalance.png" },
  { name: "Converse", logo: "/brands/converse.png" },
  { name: "Vans", logo: "/brands/vans.png" },
];

export default function MarqueeSec() {
  return (
    <div className="border-t border-b border-neutral-900 py-4">
      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="flex items-center space-x-12">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
