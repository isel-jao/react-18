export function fetchAndSaveFile(fileUrl: string, fileName: string) {
  const ext = fileUrl.split(".").pop();
  fetch(fileUrl, { method: "GET" })
    .then((res) => res.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName + "." + ext);
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
}

export function getSizeString(size: number = 0) {
  if (size < 1024) return size + " B";
  if (size < 1024 * 1024) return (size / 1024).toFixed(2) + " KB";
  if (size < 1024 * 1024 * 1024) return (size / 1024 / 1024).toFixed(2) + " MB";
  return (size / 1024 / 1024 / 1024).toFixed(2) + " GB";
}

export function toggleFullScreen() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen();
  else if (document.exitFullscreen) document.exitFullscreen();
}

export function stringify(value: unknown) {
  if (typeof value === "string") return value;
  return JSON.stringify(value);
}

export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function throttle(ms: number) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // do nothing
  }
}

export function IsValidRef(ref: unknown) {
  if (typeof ref === "object" && ref !== null && "current" in ref) {
    return true;
  }
  return false;
}

export function addAndRemoveClassWithDelay(
  element: HTMLElement,
  className: string,
  ms: number = 500,
) {
  const classNames = className.split(" ").filter((c) => c);

  classNames.forEach((className) => {
    element.classList.add(className);
  });
  setTimeout(() => {
    classNames.forEach((className) => {
      element.classList.remove(className);
    });
  }, ms);
}

export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
