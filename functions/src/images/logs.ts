
import config from "./config";

export const complete = () => {
  console.log("Completed execution of extension");
};

export const noContentType = () => {
  console.log(`File has no Content-Type, no processing is required`);
};

export const contentTypeInvalid = (contentType: string) => {
  console.log(
    `File of type '${contentType}' is not an image, no processing is required`
  );
};

export const unsupportedType = (
  unsupportedTypes: string[],
  contentType: string
) => {
  console.log(
    `Image type '${contentType}' is not supported, here are the supported file types: ${unsupportedTypes.join(
      ", "
    )}`
  );
};

export const error = (err: Error) => {
  console.error("Error when resizing image", err);
};

export const errorDeleting = (err: Error) => {
  console.warn("Error when deleting temporary files", err);
};

export const failed = () => {
  console.log("Failed execution of extension");
};

export const imageAlreadyResized = () => {
  console.log("File is already a resized image, no processing is required");
};

export const imageDownloaded = (remotePath: string, localPath: string) => {
  console.log(`Downloaded image file: '${remotePath}' to '${localPath}'`);
};

export const imageDownloading = (path: string) => {
  console.log(`Downloading image file: '${path}'`);
};

export const imageResized = (path: string) => {
  console.log(`Resized image created at '${path}'`);
};

export const imageResizing = (path: string, size: string) => {
  console.log(`Resizing image at path '${path}' to size: ${size}`);
};

export const imageUploaded = (path: string) => {
  console.log(`Uploaded resized image to '${path}'`);
};

export const imageUploading = (path: string) => {
  console.log(`Uploading resized image to '${path}'`);
};

export const init = () => {
  console.log("Initializing extension with configuration", config);
};

export const start = () => {
  console.log("Started execution of extension with configuration", config);
};

export const tempDirectoryCreated = (directory: string) => {
  console.log(`Created temporary directory: '${directory}'`);
};

export const tempDirectoryCreating = (directory: string) => {
  console.log(`Creating temporary directory: '${directory}'`);
};

export const tempOriginalFileDeleted = (path: string) => {
  console.log(`Deleted temporary original file: '${path}'`);
};

export const tempOriginalFileDeleting = (path: string) => {
  console.log(`Deleting temporary original file: '${path}'`);
};

export const tempResizedFileDeleted = (path: string) => {
  console.log(`Deleted temporary resized file: '${path}'`);
};

export const tempResizedFileDeleting = (path: string) => {
  console.log(`Deleting temporary resized file: '${path}'`);
};

export const remoteFileDeleted = (path: string) => {
  console.log(`Deleted original file from storage bucket: '${path}'`);
};

export const remoteFileDeleting = (path: string) => {
  console.log(`Deleting original file from storage bucket: '${path}'`);
};
