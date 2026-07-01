# StageSync App
This is the application source for [StageSync](https://StageSync.org). Looking for the website? It's at [StageSync-Website](https://github.com/Stage-Sync/StageSync-Website)!

## How to run development
1. Install Bun packages - `bun install`
2. Start the TailwindCSS compiler - `bun run dev:css`
3. Run the application with Hot Reload - `bun run dev:hmr`

## Building the application
1. Ensure everything has compiled *(specifically TailwindCSS)*
2. Run Electrobun Build *(both canary and stable)* - `bun run build`

## Releasing a build
1. Bump the `package.json` version appropriately
2. Create a new tag matching the new version
3. Append `-stable` or `-canary` to the end of the tag
4. Push the tag with the commit to trigger the GH Action

## Publishing StageSync
This will be available **Soon™**

© 2026 StageSync