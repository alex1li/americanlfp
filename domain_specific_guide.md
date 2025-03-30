# Domain-Specific Deployment Guide for American LFP Website

This guide provides specific instructions for deploying your American LFP website to different hosting providers. Choose the option that best fits your needs and technical comfort level.

## Quick Comparison of Recommended Options

| Hosting Option | Ease of Use | Cost | Speed | Best For |
|----------------|-------------|------|-------|----------|
| Netlify        | ★★★★★      | Free tier available | Very Fast | Most users, quickest setup |
| GitHub Pages   | ★★★★☆      | Free | Fast | Developers familiar with Git |
| AWS S3/CloudFront | ★★☆☆☆   | Pay-as-you-go (~$1-5/mo) | Very Fast | Enterprise needs, scaling |
| Traditional Hosting | ★★★☆☆ | $3-15/mo | Varies | Users who prefer cPanel interfaces |

## Netlify Deployment (Recommended)

Netlify is the easiest option for deploying a static website like American LFP with excellent performance.

### Step-by-Step Instructions:

1. **Create a Netlify account**
   - Go to [netlify.com](https://www.netlify.com/) and sign up (free)
   - You can sign up with GitHub, GitLab, Bitbucket, or email

2. **Deploy your site**
   - From the Netlify dashboard, click "Add new site" → "Deploy manually"
   - Drag and drop your unzipped `deployment_package` folder onto the upload area
   - Wait a few moments for the upload and deployment to complete

3. **Configure your site**
   - Netlify will assign a random subdomain (e.g., eloquent-tesla-3e7d2a.netlify.app)
   - Click "Site settings" → "Change site name" to choose a more memorable subdomain

4. **Connect your custom domain**
   - In Site settings, go to "Domain management" → "Add custom domain"
   - Enter your domain name (e.g., americanlfp.com)
   - Follow Netlify's instructions to update your DNS records:
     - Option 1: Change nameservers to Netlify's (recommended for full Netlify DNS)
     - Option 2: Add CNAME record pointing to your netlify.app domain

5. **Enable HTTPS**
   - Netlify automatically provisions a free SSL certificate through Let's Encrypt
   - This process begins automatically after your DNS is properly configured
   - It may take up to 24 hours to complete

## GitHub Pages Deployment

GitHub Pages is a great free option, especially if you're already using GitHub.

### Step-by-Step Instructions:

1. **Create a GitHub account**
   - Go to [github.com](https://github.com/) and sign up if you don't have an account

2. **Create a new repository**
   - Click the "+" icon in the top right → "New repository"
   - Name it either:
     - `yourusername.github.io` (for a user site)
     - Any name (for a project site)
   - Make the repository public
   - Initialize with a README if you want

3. **Upload your files**
   - Click "Add file" → "Upload files"
   - Drag and drop all files from your unzipped `deployment_package` folder
   - Commit the changes

4. **Enable GitHub Pages**
   - Go to repository "Settings" → "Pages"
   - Under "Source", select the branch (usually "main")
   - Click "Save"
   - Your site will be published to `yourusername.github.io` or `yourusername.github.io/repository-name`

5. **Add a custom domain (optional)**
   - In the GitHub Pages settings, enter your custom domain
   - Create a file named `CNAME` in your repository with just your domain name
   - At your domain registrar, add a CNAME record pointing to `yourusername.github.io`

## AWS S3 + CloudFront Deployment

For enterprise-grade hosting with excellent performance and scalability.

### Step-by-Step Instructions:

1. **Create an AWS account**
   - Go to [aws.amazon.com](https://aws.amazon.com/) and sign up

2. **Create an S3 bucket**
   - Go to S3 in the AWS console
   - Click "Create bucket"
   - Name the bucket your domain name (e.g., `americanlfp.com`)
   - Uncheck "Block all public access" (since this is a public website)
   - Enable "Static website hosting" in bucket properties
   - Set index document to `index.html`

3. **Upload your files**
   - Upload all files from your unzipped `deployment_package` folder to the S3 bucket
   - Make sure all files are set to be publicly readable

4. **Set up CloudFront (CDN)**
   - Go to CloudFront in the AWS console
   - Create a new distribution
   - Select your S3 bucket as the origin
   - Configure settings (default settings work well for most cases)
   - Enable HTTPS by requesting a certificate through AWS Certificate Manager

5. **Connect your domain**
   - Create a record in Route 53 or your DNS provider pointing to your CloudFront distribution

## Traditional Web Hosting (cPanel)

For users who prefer traditional hosting with familiar interfaces.

### Step-by-Step Instructions:

1. **Sign up with a hosting provider**
   - Recommended: Bluehost, SiteGround, or DreamHost
   - Choose a shared hosting plan (usually the basic plan is sufficient)

2. **Connect your domain**
   - Either register a domain through your hosting provider
   - Or update nameservers at your current registrar to point to your hosting provider

3. **Access cPanel**
   - Log in to your hosting account
   - Navigate to cPanel (usually accessible via a button in your account dashboard)

4. **Upload your files**
   - In cPanel, find the File Manager tool
   - Navigate to the public_html or www directory
   - Upload all files from your unzipped `deployment_package` folder
   - Alternatively, use FTP:
     - In cPanel, find FTP credentials or create an FTP account
     - Use an FTP client like FileZilla to connect
     - Upload all files to the public_html directory

5. **Verify your website**
   - Visit your domain to ensure everything is working correctly

## Domain Management Tips

### Purchasing a Domain

1. **Choose a registrar**
   - Recommended: Namecheap, Google Domains, or Cloudflare Registrar
   - Look for free WHOIS privacy and reasonable renewal rates

2. **Select your domain name**
   - Keep it short, memorable, and relevant (e.g., americanlfp.com)
   - Consider also securing common variations (.net, .org) if available

3. **Complete the purchase**
   - Provide required contact information
   - Enable WHOIS privacy protection if available
   - Consider multi-year registration for discounts

### DNS Configuration

Different deployment options require different DNS records:

- **Netlify**: Either change nameservers or add a CNAME record
- **GitHub Pages**: Add a CNAME record pointing to yourusername.github.io
- **AWS**: Add an A record pointing to your CloudFront distribution
- **Traditional Hosting**: Change nameservers or add A records

### SSL/HTTPS Setup

- **Netlify and GitHub Pages**: Automatic SSL through Let's Encrypt
- **AWS**: Use AWS Certificate Manager (free with CloudFront)
- **Traditional Hosting**: Use Let's Encrypt through cPanel or purchase an SSL certificate

## Need More Help?

If you encounter any issues during deployment, most hosting providers offer support through:
- Live chat
- Email support
- Knowledge base articles
- Community forums

For specific technical questions about the website files themselves, refer to the main deployment guide included in the package.
