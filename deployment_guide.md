# American LFP Website Deployment Guide

This guide will help you deploy the American LFP website to your own domain. Follow these steps to get your website up and running.

## Table of Contents
1. [Files Overview](#files-overview)
2. [Hosting Options](#hosting-options)
3. [Domain Registration](#domain-registration)
4. [Deployment Steps](#deployment-steps)
5. [Post-Deployment Checklist](#post-deployment-checklist)
6. [Troubleshooting](#troubleshooting)

## Files Overview

The website package contains the following files and directories:

- `index.html` - The main HTML file
- `styles.css` - The CSS stylesheet with dark theme styling
- `script.js` - JavaScript functionality
- `images/` - Directory containing all SVG icons and images
  - `logo.svg` - Company logo
  - `hero-background.svg` - Hero section background
  - Various icon and application SVG files

## Hosting Options

### Shared Hosting
- **GoDaddy, Bluehost, HostGator, DreamHost**
  - Pros: Easy to set up, affordable, includes domain registration
  - Cons: Limited control, may have performance limitations
  - Cost: $3-15/month

### Cloud Hosting
- **AWS S3 + CloudFront**
  - Pros: Highly scalable, pay-as-you-go pricing, global CDN
  - Cons: More technical setup, separate services to configure
  - Cost: Based on usage (typically $1-5/month for small sites)

- **Google Cloud Storage**
  - Pros: Similar benefits to AWS, good integration with Google services
  - Cons: Requires some technical knowledge
  - Cost: Based on usage

- **Microsoft Azure**
  - Pros: Enterprise-grade hosting, good for Microsoft ecosystem
  - Cons: Can be complex to set up
  - Cost: Based on usage

### Static Site Hosting (Recommended for this website)
- **GitHub Pages**
  - Pros: Free, easy integration with Git, automatic deployment
  - Cons: Limited to static content (which is fine for this site)
  - Cost: Free

- **Netlify**
  - Pros: Free tier, easy deployment, global CDN, form handling
  - Cons: Advanced features require paid plans
  - Cost: Free tier available, paid plans start at $19/month

- **Vercel**
  - Pros: Free tier, optimized for static sites, global CDN
  - Cons: Advanced features require paid plans
  - Cost: Free tier available, paid plans start at $20/month

## Domain Registration

1. Choose a domain registrar:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Cloudflare Registrar

2. Search for your desired domain name (e.g., americanlfp.com)

3. Complete the registration process and payment

4. After registration, you'll need to connect your domain to your hosting provider

## Deployment Steps

### Option 1: Traditional Web Hosting

1. **Set up hosting account**
   - Sign up with your chosen hosting provider
   - Create a new hosting plan

2. **Connect domain to hosting**
   - Update nameservers at your domain registrar to point to your hosting provider
   - Alternatively, add DNS records to point to your hosting

3. **Upload files**
   - Use FTP client (FileZilla, Cyberduck) or web interface
   - Connect to your hosting using credentials provided by your host
   - Upload all files from the deployment package to the root directory (usually public_html or www)

4. **Verify deployment**
   - Visit your domain in a web browser
   - Check that all pages and images load correctly

### Option 2: GitHub Pages (Free)

1. **Create a GitHub account** if you don't have one

2. **Create a new repository**
   - Name it `yourusername.github.io` for user site or any name for project site

3. **Upload files**
   - Clone the repository to your computer
   - Copy all files from the deployment package to the repository
   - Commit and push the changes

4. **Enable GitHub Pages**
   - Go to repository settings
   - Scroll to GitHub Pages section
   - Select the branch to deploy (usually main or master)
   - Save changes

5. **Connect custom domain** (optional)
   - In GitHub Pages settings, add your custom domain
   - Create a CNAME record at your domain registrar pointing to `yourusername.github.io`
   - Add a file named CNAME to your repository with your domain name

### Option 3: Netlify (Recommended)

1. **Create a Netlify account**

2. **Deploy site**
   - Click "New site from Git" if using Git, or
   - Drag and drop the entire deployment package folder to the Netlify dashboard

3. **Configure settings**
   - Set build command (not needed for this static site)
   - Set publish directory (usually the root directory)

4. **Connect custom domain**
   - Go to Site settings > Domain management
   - Add custom domain
   - Follow Netlify's instructions to update DNS records

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Check that all images and icons display properly
- [ ] Test responsive design on mobile devices
- [ ] Ensure all links work correctly
- [ ] Test contact functionality if applicable
- [ ] Check for any console errors

## Troubleshooting

### Images not loading
- Ensure file paths are correct
- Check file permissions (should be 644 for files, 755 for directories)
- Verify image files were uploaded correctly

### CSS not applying
- Check that the styles.css file was uploaded
- Verify the link to the CSS file in the HTML is correct
- Clear browser cache

### Domain not resolving
- DNS changes can take 24-48 hours to propagate
- Verify DNS records are set up correctly
- Check nameserver configuration

### Website loads but looks incorrect
- Clear browser cache
- Try in incognito/private browsing mode
- Check for console errors in browser developer tools

For additional help, consult your hosting provider's documentation or support channels.
