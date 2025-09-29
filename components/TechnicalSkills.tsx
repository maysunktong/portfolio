export default function TechnicalSkills() {
  return (
    <div className="pt-12 space-y-3 md:space-y-6">
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight dark:text-white">
        Technical Skills
      </h3>

      <div className="space-y-4 text-sm md:text-base leading-relaxed">
        <p>
          <span className="font-semibold">Programming languages:</span>{" "}
          JavaScript, TypeScript, HTML, CSS, SQL
        </p>
        <p>
          <span className="font-semibold">Backend:</span> Node.js, Express,
          PostgreSQL, Supabase
        </p>
        <p>
          <span className="font-semibold">Frontend:</span> React.js, Next.js,
          TailwindCSS, MUI, SASS
        </p>
        <p>
          <span className="font-semibold">Tools/Testing:</span> Git/GitHub,
          Vercel, TanStack, Figma, GSAP, Framer, Jest
        </p>
      </div>
    </div>
  );
}
