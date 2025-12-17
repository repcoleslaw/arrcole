import Image from "next/image";
import { Card } from "../Card";

export function MusicCard() {
  return (
    <Card title="What I’m listening">
      <div className="flex gap-4">
        <Image
          src="/album.jpg"
          alt="Album"
          width={64}
          height={64}
          className="rounded-lg"
        />
        <div>
          <p className="font-medium">IGOR’S THEME</p>
          <p className="text-sm text-neutral-500">Tyler, The Creator</p>
        </div>
      </div>
    </Card>
  );
}
