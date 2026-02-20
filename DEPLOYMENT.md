# Deployment Guide - Ananya SEO Website

This guide will help you deploy your Ananya SEO website to Vercel via GitHub.

## Prerequisites

- A GitHub account (free at github.com)
- A Vercel account (free at vercel.com)
- Git installed on your computer

## Step 1: Push Code to GitHub

### Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `ananyaseo-website`)
4. Add a description: "Ananya SEO Services Website"
5. Choose "Public" (recommended for Vercel integration)
6. Click "Create repository"

### Push Your Local Code

In your project directory, run these commands:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Ananya SEO website with modern design and responsive layout"

# Add GitHub as remote repository
git remote add origin https://github.com/YOUR_USERNAME/ananyaseo-website.git

# Rename branch to main
git branch -M main

# Push code to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 2: Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in or create a free account
3. Click "Add New..." and select "Project"
4. Click "Import Git Repository"
5. Paste your GitHub repository URL (e.g., https://github.com/YOUR_USERNAME/ananyaseo-website)
6. Click "Continue"
7. Vercel will auto-detect the framework (React with Vite)
8. Review the default settings and click "Deploy"

Your site will be deployed in approximately 2-3 minutes!

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. In your project directory, run:
```bash
vercel
```

3. Follow the prompts:
   - Link to existing project or create new
   - Confirm settings
   - Deploy

## Step 3: Connect Your Custom Domain

After deployment on Vercel:

1. Go to your Vercel project settings
2. Click on "Domains"
3. Add your custom domain (e.g., ananyaseo.com)
4. Follow the instructions to update your domain's DNS records with your domain provider
5. Wait for DNS propagation (usually 5-30 minutes)

## Step 4: Auto-Deployments

Vercel automatically redeploys your site whenever you push code to GitHub:

1. Make changes to your code
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Update: <description of changes>"
git push
```
3. Vercel automatically detects the push and redeploys within seconds

## Environment Variables (Optional)

If you need environment variables in the future:

1. Go to your Vercel project settings
2. Click "Environment Variables"
3. Add your variables
4. Redeploy the project

Currently, no environment variables are required for this website.

## Project Structure After Deployment

Your deployed site will have:

- **Live URL**: `https://ananyaseo-website.vercel.app` (temporary)
- **Custom Domain**: `https://ananyaseo.com` (after DNS setup)
- **Auto-HTTPS**: SSL certificate automatically included
- **CDN**: Global content delivery network
- **Analytics**: Built-in performance analytics in Vercel dashboard

## Monitoring & Maintenance

### View Deployment Logs
1. Go to Vercel Dashboard
2. Select your project
3. Click "Deployments" tab to see deployment history

### Monitor Performance
1. Click "Analytics" tab to see website performance metrics
2. View page load times, Core Web Vitals, and other metrics

### Rollback to Previous Deployment
1. Go to "Deployments" tab
2. Find the previous working deployment
3. Click "Promote to Production"

## Troubleshooting

### Site not loading after deploy?
- Check Vercel deployment logs for build errors
- Ensure all dependencies are in package.json
- Verify environment variables are correctly set

### DNS not working?
- Wait 24-48 hours for full DNS propagation
- Check DNS settings with your domain provider
- Use DNS checker tools: dnschecker.org

### Build fails?
- Run `npm run build` locally to test
- Check for TypeScript errors: `npm run typecheck`
- Review Vercel build logs for specific errors

## Support

- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
- For issues, check Vercel's status page: status.vercel.com

## Next Steps

After deployment, consider:

1. Set up Google Analytics for tracking
2. Configure Google Search Console
3. Add SEO meta tags (already included)
4. Set up email notifications in Vercel
5. Monitor performance metrics regularly

Your website is now live and ready to serve your SEO services!
