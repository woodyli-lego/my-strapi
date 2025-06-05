# Notes

## 安装依赖

```bash
npm install
```

## 启动依赖

```bash
make infra-start
```

## 准备 .env 文件

```bash
cp .env.example .env
```

## 启动 strapi

```bash
npm run develop
```

## 访问 strapi

访问 http://localhost:1337/admin/，需要先用真实邮箱注册用户（默认成为 super admin）。

## 访问 PostgreSQL

通过 http://localhost:5050/browser/ 访问 pgAdmin4，观察数据结构。

使用下面用户名密码登录 pgAdmin4：

- username: admin@company.com
- password: 123456

使用以下用户名密码访问 postgres 数据库：

- username: postgres
- password: 123456
