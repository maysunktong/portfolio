import { StatusIndicator } from "./StatusIndicator";

export default function ProfileImage() {
  return (
    <div className="rounded-2xl aspect-square overflow-hidden w-30">
      <img
        className="w-full h-full object-cover sepia-10"
        src="/images/profile.jpeg"
        alt="profile"
      />
    </div>
  );
}
