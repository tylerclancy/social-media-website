# Social Media Website

This is a social media website built with Next.js, Prisma, and NextAuth. It's a small and simple social network where users can create an account, write blog posts, and follow other users.

### Features

- Google User Authentication
- Blog Posting
- User Following System

### Prerequisites

Technologies you'll need to install to use this project:

- Node.js
- PostgreSQL
- NPM or Yarn
- Prisma

### Installation

Steps to get the development environment running:

1. Clone the repository: `git clone https://github.com/tylerclancy/social-media-website.git`
2. Navigate to the project directory: `cd social-media-website`
3. Install dependencies `npm install`
4. Set up environment variables: Create a `.env` file with your configuration details (database connection, auth providers, etc.).
5. Start the development server: `npm run dev`

### Configuration

Inside the `.env` file, you'll need to set up the following environment variables:

- `DATABASE_URL`: The connection string for your PostgreSQL database.
- `NEXTAUTH_SECRET`: A secret string used to encrypt cookies. You can generate a random string with `openssl rand -hex 32`.
- `GOOGLE_CLIENT_ID`: Your Google OAuth client ID.
- `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret.

### Built With

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. Make changes and commit: `git commit -m "Add my feature"`.
4. Push changes to your fork: `git push origin feature/my-feature`
5. Submit a pull request to the original repository.

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
