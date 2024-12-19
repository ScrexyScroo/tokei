<script lang="ts">
  import { Bolt, House } from "lucide-svelte";
  import { onMount } from "svelte";

  // List of available themes
  const themes = ["lofi", "black"];
  let currentTheme: string;

  onMount(() => {
    // Get theme from localStorage or use system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("black");
      } else {
        setTheme("lofi");
      }
    }
  });

  function setTheme(theme: string) {
    // Update localStorage
    localStorage.setItem("theme", theme);
    // Update data-theme attribute on html element
    document.documentElement.setAttribute("data-theme", theme);
    currentTheme = theme;
  }

  function toggleTheme() {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  }
</script>

<div class="flex h-screen">
  <ul class="menu menu-vertical bg-base-300">
    <li>
      <a href="/" aria-label="Main">
        <House class="h-5 w-5" />
      </a>
    </li>
    <li>
      <a href="/subsplease" aria-label="Subsplease">
        <span class="font-semibold">SP</span>
      </a>
    </li>
    <li>
      <a href="/nyaa" aria-label="Nyaa">
        <!-- <span class="font-semibold">N</span> -->
        <img src="https://i.imgur.com/TKkz0qM.png" alt="N" class="h-5 w-5" />
      </a>
    </li>
    <li>
      <a href="/seadex" aria-label="Seadex">
        <!-- <span class="font-semibold">N</span> -->
        <img src="https://releases.moe/favicon.png" alt="S" class="h-5 w-5" />
      </a>
    </li>
    <li>
      <a href="/qbittorrent" aria-label="qbittorrent">
        <img
          src="https://raw.githubusercontent.com/qbittorrent/qBittorrent/refs/heads/master/src/icons/qbittorrent.ico"
          alt="qB"
          class="h-5 w-5"
        />
      </a>
    </li>
    <li>
      <a href="/myanimelist" aria-label="Myanimelist">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png"
          alt="MAL"
          class="h-5 w-5"
        />
      </a>
    </li>
    <li>
      <a href="/anilist" aria-label="Anilist">
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <!-- Removed the background rectangle -->
          <path
            d="M321.92 323.27V136.6c0-10.698-5.887-16.602-16.558-16.602h-36.433c-10.672 0-16.561 5.904-16.561 16.602v88.651c0 2.497 23.996 14.089 24.623 16.541 18.282 71.61 3.972 128.92-13.359 131.6 28.337 1.405 31.455 15.064 10.348 5.731 3.229-38.209 15.828-38.134 52.049-1.406.31.317 7.427 15.282 7.87 15.282h85.545c10.672 0 16.558-5.9 16.558-16.6v-36.524c0-10.698-5.886-16.602-16.558-16.602z"
            fill="#02a9ff"
          />
          <path
            d="M170.68 120 74.999 393h74.338l16.192-47.222h80.96L262.315 393h73.968l-95.314-273zm11.776 165.28 23.183-75.629 25.393 75.629z"
            fill="currentColor"
          />
        </svg>
      </a>
    </li>
    <div class="mt-auto">
      <li>
        <a href="/settings" aria-label="Settings">
          <Bolt class="h-5 w-5" />
        </a>
      </li>
      <li>
        <a href="/about" aria-label="About">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </li>
      <li>
        <label class="swap swap-rotate">
          <!-- this hidden checkbox controls the state -->
          <input
            type="checkbox"
            class="theme-controller"
            checked={currentTheme !== "retro"}
            on:change={toggleTheme}
          />

          <!-- sun icon -->
          <svg
            class="swap-off h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>

          <!-- moon icon -->
          <svg
            class="swap-on h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
      </li>
    </div>
  </ul>
</div>
