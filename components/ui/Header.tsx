export default function Header({text}:{text:string}) {
  return (
    <h1 className="text-3xl md:text-5xl font-bold font-jet tracking-tighter pt-12 pb-8">{text}</h1>
  );
}
