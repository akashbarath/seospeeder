const fs = require('fs');

const file = 'src/components/service-dashboard.tsx';
let content = fs.readFileSync(file, 'utf8');

// replace imports
content = content.replace('import { SERVICES } from "@/config/services";', 'import { SERVICES } from "@/config/services";\nimport { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";\nimport { Badge } from "@/components/ui/badge";');

// replace everything after the comment
const index = content.indexOf('/* --- WORDPRESS APEX COMMAND CENTER (THE BEST) --- */');
if (index !== -1) {
  const newText = fs.readFileSync('wp-dashboard-replacement.txt', 'utf8');
  content = content.substring(0, index) + newText;
  fs.writeFileSync(file, content);
  console.log("Updated WordPress Dashboard successfully.");
} else {
  console.log("Comment not found!");
}
