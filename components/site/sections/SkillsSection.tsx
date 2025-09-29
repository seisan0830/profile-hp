import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section id="skills" className="py-10">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        <Badge>TypeScript</Badge>
        <Badge>React</Badge>
        <Badge>Next.js</Badge>
        <Badge>Tailwind CSS</Badge>
        <Badge>shadcn/ui</Badge>
      </div>
    </section>
  );
}


