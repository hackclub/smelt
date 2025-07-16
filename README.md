#  Smelt - A Hack Club YSWS (You Ship, We Ship)

Welcome to **Smelt**, a Hack Club "You Ship, We Ship" (YSWS) event where you get to build amazing websites with Svelte/SvelteKit and in the process also earn awesome swag based on the hours you put in!

## How can I participate?

1. Build a website using **Svelte** or **SvelteKit**
2. Include a secret **Easter Egg** in your site
3. **Ship** your website publicly
4. Submit your site and get some **cool stuff** in return!

## Prizes

The more hours you spend coding, the more prizes you can earn:

- **1 hour** - Svelte/Smelt Stickers
- **3 hours** - Smelted Coin
- **5 hours** - Smelted USB Stick  
- **7 hours** - Smelted Pin
- **12 hours** - Smelted Mousepad
- **16 hours** - Smelted T-Shirt

## You want to make contributions to the site?

You're in the right place :)

### Prerequisites

- Node.js (version 16 or higher)
- npm
- Git


## The Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS
- **Animations**: Vanilla Tilt.js is the only one..
- **Deployment**: Coolify

## 📋 Project Structure

```
src/
├── routes/
│   ├── +layout.svelte    # Root layout - pretty empty at the moment
│   └── +page.svelte      # Main landing page - where the work is done
├── lib/
│   └── index.ts          # Shared utilities - Empty
├── app.css               # Global styles - Only used for safari support 
├── app.d.ts              # TypeScript declarations - Pretty Empty
└── app.html              # HTML template

static/
├── hero/                 # Hero section images
├── coin-flat-new.svg     # Smelted coin logo
├── flag_left.svg         # Hack Club flag
└── vanilla-tilt.min.js   # Tilt animation library
```

## How to Contribute

We welcome contributions to make the Smelt website even better! Here's how you can help:

### Want to report an Issue?

1. Check if the issue already exists in our [Issues](https://github.com/hackclub/smelt/issues)
2. If not, create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)

### 💻 Contributing Code

1. **Fork the repository**
   ```bash
   git fork https://github.com/hackclub/smelt
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Test your changes locally
   - Ensure the site works on different browsers (especially Safari!) - we had some issues with animations previously.

4. **Commit your changes**
   ```bash
   git commit -m "Add: brief description of your changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide a description of what you changed
   - Reference any related issues


## Timeline

- **Start Date**: July 10, 2025
- **End Date**: July 31, 2025
- **Submission Deadline**: July 31, 2025

##  Important Links

- [Submit Your Site](https://forms.hackclub.com/t/nGQ96A1Lnwus)
- [Hack Club Slack](https://hackclub.com/slack)
- [#smelt Channel](https://hackclub.slack.com/archives/C09535Y8E83)
- [Hackatime (Time Tracking)](https://hackatime.hackclub.com)
- [Svelte Tutorial](https://svelte.dev/tutorial/svelte/welcome-to-svelte)
- [SvelteKit Tutorial](https://svelte.dev/tutorial/kit/introducing-sveltekit)

## License

This project is open source and available under the [MIT License](LICENSE).

##  Support

Need help? Have questions?
- Join our [#smelt channel](https://hackclub.slack.com/archives/C09535Y8E83) on Slack
- Check out the [FAQ section](https://smelt.hackclub.com/#faqs) on our website
- Email us at [alexvd@hackclub.com](mailto:alexvd@hackclub.com)

##  Credits

Made with ❤️ by Hack Club's [Alex Van Doren](https://github.com/vandorena) and [Sam Liu](https://github.com/samdev-7)

---

© 2025 Hack Club. 501(c)(3) nonprofit (EIN: 81-2908499).

**Happy Smelting!**