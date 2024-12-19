# Tokei

Your ultimate window to all things anime

### Why

I just wanted a simple desktop application to enjoy some anime. This tool focuses on being simple, and be a single place to browse stuff

### Thanks to these wonderful open-source projects

- [libmpv](https://github.com/mpv-player/mpv)
- [tauri](https://github.com/tauri-apps/tauri)

### Integrations

These are just websites being loaded in a webview

- Anilist
- Myanimelist
- Seadex
- Nyaa
- Subsplease
- AnimeTosho
- qbittorrent `requires qbit webui on port 8888`

## Dev env setup

Recommended IDE Setup \
[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer).

- This setup assumes you have rust installed. If you don't please visit [rust-lang.org](https://www.rust-lang.org/tools/install)
- Also please make sure you have the [prerequisites](https://v2.tauri.app/start/prerequisites/) dependencies that are required by Tauri
- Download the required libmpv dlls/libs as per your platform
  - For 🪟 Windows dll's are available [here](https://github.com/shinchiro/mpv-winbuild-cmake/releases) by shinchiro. If needed please place them in your target/debug folder generated by tauri as the same level as the `tokei.exe`
  - For Linux installing this `libmpv-dev` should just work
  - For MacOS one might need `brew install mpv`
- Configure the path in `build.rs` if needed

```sh
git clone https://github.com/ScrexyScroo/tokei.git
cd tokei/
npm install
npm run tauri dev
```
### Known Issues

- No adblock
- mpv hangs when it's window is closed
