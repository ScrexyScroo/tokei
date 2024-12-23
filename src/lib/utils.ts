import { invoke } from "@tauri-apps/api/core";
import { getAllWebviews } from "@tauri-apps/api/webview";

export async function createChildWebview(name: string, url: string) {
  const webviewLabel = `${name}_webview`;

  try {
    // First, check if the webview already exists
    const webviews = await getAllWebviews();
    const webviewExists = webviews.some(
      (webview) => webview.label === webviewLabel
    );

    if (!webviewExists) {
      await invoke("create_child_webview", {
        serviceName: name,
        serviceUrl: url,
      });
    } else {
      await webviewsToHide(webviewLabel); // Hide otherwebviews except main and current webview

      // If it exists, show the existing webview
      await invoke("toggle_webview", {
        webviewLabel: webviewLabel,
        toggleMode: "show",
      });
    }
  } catch (error) {
    console.error(`Failed to create tokie - ${webviewLabel} webview:`, error);
  }
}

export async function webviewsToHide(skip_webview: string) {
  const webviews = await getAllWebviews();

  // Hide all other webviews except the main window and the one we're about to show
  const webviewsToHide = webviews.filter(
    (webview) => webview.label !== "main" && webview.label !== skip_webview
  );

  for (const webview of webviewsToHide) {
    await invoke("toggle_webview", {
      webviewLabel: webview.label,
      toggleMode: "hide",
    });
  }
}

export async function fetchMediaDirectoryStructure(): Promise<any> {
  let path = localStorage.getItem("savedAnimePath");

  if (!path) {
    console.error(
      "Failed to fetch directory structure - savedAnimePath not configured."
    );
    return;
  }

  try {
    const structure = await invoke("wrap_read_media_directory_structure", {
      rootAnimePath: path,
    });
    return structure;
  } catch (error) {
    console.error("Failed to fetch directory structure:", error);
    return;
  }
}

export function extractFileName(filePath: string): string {
  return filePath.split("\\").pop() || filePath;
}

