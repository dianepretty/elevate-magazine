import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthorDashboard() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (title && content) {
      const newArticle = { id: Date.now(), title, content };
      setArticles([...articles, newArticle]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="p-6">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Write a New Article</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Article Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-4"
          />
          <Textarea
            placeholder="Write your article here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handleSubmit}>Submit Article</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Articles</CardTitle>
        </CardHeader>
        <CardContent>
          {articles.length === 0 ? (
            <p className="text-gray-500">No articles yet.</p>
          ) : (
            <ul>
              {articles.map((article) => (
                <li key={article.id} className="p-2 border-b">
                  <h3 className="font-bold">{article.title}</h3>
                  <p className="text-sm text-gray-600">{article.content}</p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
