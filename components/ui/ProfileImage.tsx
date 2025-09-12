import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="rounded-2xl aspect-square overflow-hidden w-30">
      <Image
        className="w-full h-full object-cover sepia-10"
        src="/images/profile.jpeg"
        alt="profile"
        width={500}
        height={500}
      />
    </div>
  );
}
