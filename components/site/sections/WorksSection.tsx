import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function WorksSection() {
  return (
    <section id="works" className="py-10">
      <h2 className="text-2xl font-bold mb-6">Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>作品タイトル {i}</CardTitle>
              <CardDescription>作品の簡単な説明</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">詳細やリンクを配置</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


