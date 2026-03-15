# 🚀 Quick Start Deployment Guide

This guide will get your portfolio live on GitHub Pages in 5 minutes!

## Prerequisites
- Git installed on your computer
- GitHub account (free at https://github.com)
- This portfolio folder on your computer

## Step 1: Initialize Git Repository

Open terminal/PowerShell in the portfolio folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository
   - Enter repository name: `portfolio` (or `yourusername.github.io` for root deployment)
   - Description: "My Professional Portfolio"
   - Choose "Public"
   - Click "Create repository"

## Step 3: Connect Local to Remote

Copy the commands from GitHub and run in your terminal:

```bash
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

Replace `yourusername` with your actual GitHub username!

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll to **Pages** section (on the left sidebar)
4. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select "main"
   - Folder: Select "/ (root)"
5. Click **Save**

## Step 5: View Your Portfolio

Wait 1-2 minutes, then visit:

```
https://yourusername.github.io/portfolio/
```

✅ **Your portfolio is live!**

---

## Before You Deploy - Checklist

Make sure to update these before going public:

- [ ] Update email address in `index.html` (search for "your.email@example.com")
- [ ] Update LinkedIn URL in `index.html`
- [ ] Update GitHub URL in `index.html` (pointing to your actual repos)
- [ ] Update Rabbit app GitHub link to your repo
- [ ] Review all text for typos
- [ ] Test all links work correctly
- [ ] Check contact form opens your email client

## Quick Edit Commands

### Change Email
Find and replace in `index.html`:
- `your.email@example.com` → your actual email

### Change GitHub Username
Find and replace in `index.html`:
- `yourusername` → your GitHub username

### Change Social Links
Update in Contact section (`index.html` ~line 320):
- LinkedIn: `https://linkedin.com/in/yourprofile`
- GitHub: `https://github.com/yourusername`

## Making Updates

To update your portfolio after initial deployment:

```bash
# Make changes to any files

git add .
git commit -m "Update: describe what changed"
git push
```

GitHub Pages will automatically rebuild within 1-2 minutes!

## Troubleshooting

### Portfolio not showing up?
- Wait 2-5 minutes after pushing
- Check Settings → Pages (verify branch is set correctly)
- Hard refresh your browser (Ctrl+Shift+R)

### 404 Error?
- Check if file exists in GitHub repo
- Verify file paths use `/` (not `\`)
- Check that index.html is in repository root

### Links not working?
- Verify relative paths are correct (`./css`, `../`)
- Check for typos in file names (case-sensitive on GitHub)

## Performance Tips

Your portfolio is already optimized, but you can further improve:

1. **Add Analytics** (optional):
   - Sign up at Google Analytics
   - Add tracking code to `<head>`

2. **Enable Compression**:
   - GitHub Pages automatically serves with gzip compression
   - Your CSS and JS are already minimal

3. **Monitor Performance**:
   - Use Lighthouse in Chrome DevTools
   - Target scores: 90+ Performance, 95+ Accessibility

## Custom Domain (Optional)

To use your own domain (e.g., yourname.com):

1. Purchase domain from GoDaddy, Namecheap, etc.
2. In your GitHub repo Settings → Pages
3. Enter custom domain name
4. Update DNS settings at your domain registrar:
   - Add A records pointing to GitHub IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

## Next Steps

1. ✅ Deploy to GitHub Pages (above)
2. 🔄 Keep updating with new projects
3. 🔗 Share your portfolio URL with recruiters
4. 📧 Update your resume/LinkedIn with portfolio link
5. 🎨 Consider adding a blog page later

---

## Support Resources

- GitHub Pages Help: https://docs.github.com/en/pages
- Git Tutorial: https://git-scm.com/doc
- HTML Reference: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS Tricks: https://css-tricks.com

## Questions?

If something doesn't work:
1. Check GitHub Pages status: https://www.githubstatus.com/
2. Review this guide again
3. Check repository settings
4. Try clearing your browser cache

---

**You're all set! Time to show the world what you can build! 🚀**

Last Updated: March 14, 2026
