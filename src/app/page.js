import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Ermias Dereje Portfolio',
  description: 'Software Engineering Student & Web Security Enthusiast',
};

export default async function Home() {
  const filePath = path.join(process.cwd(), 'public', 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');

  return <div className="min-h-screen" dangerouslySetInnerHTML={{ __html: html }} />;
}
