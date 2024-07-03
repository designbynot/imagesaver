chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "saveImage",
      title: "Save Image to NOTBYDESIGN_POSTS",
      contexts: ["image"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "saveImage") {
      const imageUrl = info.srcUrl;
      saveImage(imageUrl);
    }
  });
  
  function saveImage(imageUrl) {
    const folderPath = 'NOTBYDESIGN_POSTS'; // The folder name you provided
    const filename = `${folderPath}/saved_image_${Date.now()}.jpg`; // Customize the filename format if needed
    chrome.downloads.download({
      url: imageUrl,
      filename: filename,
      conflictAction: 'overwrite',
      saveAs: false
    });
  }