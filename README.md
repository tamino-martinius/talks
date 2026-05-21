# talks

Monorepo of presentations by Tamino Martinius, built with [`lets-talk-about`](https://github.com/tamino-martinius/lets-talk-about) and deployed to <https://talks.tamino.dev/>.

Each subdirectory is one talk and is exposed at `https://talks.tamino.dev/<talk-name>/`.

## Local development

```sh
pnpm install
pnpm --filter ./api dev          # dev server for one talk
pnpm run build                   # build every talk into ./dist
```

## Adding a new talk

1. `mkdir <talk-name> && cd <talk-name>`
2. Create `package.json` matching the existing talks (`lets-talk-about` dep via the workspace catalog).
3. Add the directory name to `pnpm-workspace.yaml`.
4. `pnpm install`, then write `slides.md`.
5. Commit + push — the deploy workflow does the rest.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which:

1. Builds every talk with `--base /<talk-name>/`.
2. Assembles `dist/` with a landing page at `/` and each talk at `/<name>/`.
3. Publishes via `actions/deploy-pages`.

The custom domain is configured via the root `CNAME` file.

## History

These presentations previously lived in 14 separate repos under `tamino-martinius/lets-talk-about--*`. They were merged here on 2026-05-21 via `git subtree --squash`. The original repos are archived.
