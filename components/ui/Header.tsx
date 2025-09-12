export default function Header({text}:{text:string}) {
  return (
    <h1 className="text-6xl font-semibold font-inter tracking-tighter pt-12 pb-8">{text}</h1>
  );
}
