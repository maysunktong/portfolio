import Link from "next/link";
import { worksData } from "../../data/works";

export default function SelectedWorks() {
  return (
    <div>
      <h1>Selected Works</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
        consequuntur rem nostrum quod pariatur, odit dolore consectetur laborum
        est, magni delectus debitis voluptate temporibus voluptates consequatur
        similique iste distinctio, corporis officiis ut aperiam commodi?
        Exercitationem tempore reprehenderit quidem natus, rem nam quisquam
        maxime! Cupiditate molestias, fuga quaerat facere deserunt eum?
      </p>
      {worksData.map((item) => (
        <div key={item.id}>
          <Link href={`/works/${item.slug}`} className="hover:underline">{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
