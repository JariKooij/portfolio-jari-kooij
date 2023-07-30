export const youtubeUrlValidator = (youtube_url: string) =>
    String(youtube_url).match(
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)|youtu\.be\/([a-zA-Z\d_-]+))(?:&.*)?$/
    );
