# Next.js TypeScript Starter

## Features

- ⚡️ Next.js 12
- ⚛️ React 17
- ⛑ TypeScript
- 📏 ESLint — Find problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🖌 Renovate — Keep your dependencies up to date
- 🚫 lint-staged — To run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on all Pull Requests
- ⚙️ EditorConfig - Maintain consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix

## Quick Start

The best way to start with this template is using [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```
yarn create next-app -e https://github.com/jpedroschmitz/typescript-nextjs-starter
# or
npx create-next-app -e https://github.com/jpedroschmitz/typescript-nextjs-starter
```

### Development

To start the project locally, run:

```bash
npm run dev
```

Open `http://localhost:3000` with your browser to see the result. To change the port:

```bash
PORT=4000 npm run dev
```

### Requirements

- Node.js >= 12.22.0

### Integrate Ant Design

Install Ant Design core and its icon set with the following command:
```
npm install antd @ant-design/icons --save
```

Manually import the antd.css file at the very top of your pages/_app.page.tsx file:
```
import 'antd/dist/antd.css';
```

For example:
```
import { Button, Space, DatePicker, Card } from 'antd';
import { CiCircleFilled } from '@ant-design/icons';

export default function Home() {
  const onChange = () => {};
  return (
    <div style={{ padding: 100 }}>
      <Space direction="vertical">
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Ghost Button</Button>
        <DatePicker onChange={onChange} />
        <CiCircleFilled />
      </Space>
    </div>
  );
}
```
