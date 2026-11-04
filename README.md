Landarr
=======

The page at twitarr.com while the ship is on land. It helps people sign up for [Twitarr](https://github.com/jocosocial/swiftarr) before they sail, using either the website or the [Tricordarr](https://github.com/jocosocial/tricordarr) app.

Development
-----------

```bash
nvm use
npm clean-install
npm run dev
```

Changes show up in the browser as soon as you save.

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

Deployment
----------

Every push to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`. Two things are set up by hand:

1. In the repo's Pages settings, set the source to GitHub Actions.
2. Point the twitarr.com DNS at GitHub Pages when the ship is on land.

App Links
---------

`public/.well-known/` holds the files iOS and Android read to decide which apps can open twitarr.com links. They are copies of `Sources/swiftarr/Resources/Assets/well-known/` in [Swiftarr](https://github.com/jocosocial/swiftarr), so update them there first and copy the changes here.

License
-------

GNU General Public License v3.0. See [LICENSE](./LICENSE).
