import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-10">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <form className="grid gap-4 max-w-xl">
        <div className="grid gap-2">
          <Label htmlFor="name">お名前</Label>
          <Input id="name" placeholder="山田 太郎" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">メールアドレス</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">メッセージ</Label>
          <Textarea id="message" rows={5} placeholder="お問い合わせ内容" />
        </div>
        <div>
          <Button type="submit">送信</Button>
        </div>
      </form>
    </section>
  );
}


