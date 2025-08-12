// YouTube API response item type
interface YouTubeItem {
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
      thumbnails: {
        high?: { url: string };
        default: { url: string };
      };
    };
  }
  
  export const getVideos = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY_FOR_YT;
    const query = "dsa ";
  
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          query
        )}&type=video&maxResults=6&key=${apiKey}`
      );
      const data: { items: YouTubeItem[] } = await res.json();
  
      return data.items.map((item) => ({
        type: "video" as const,
        title: item.snippet.title,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        thumbnail:
          item.snippet.thumbnails.high?.url ||
          item.snippet.thumbnails.default.url,
      }));
    } catch (err) {
      console.error("YouTube API Error:", err);
      return [];
    }
  };
  
  // Dev.to API response item type
  interface DevToItem {
    title: string;
    description: string;
    url: string;
    cover_image: string | null;
    readable_publish_date: string;
    user?: {
      name?: string;
      profile_image_90?: string;
    };
    tag_list?: string[];
  }
  
  export const getReports = async ({ lan }: { lan: string }) => {
    try {
      const res = await fetch(
        `https://dev.to/api/articles?tag=${lan}&per_page=5`
      );
      if (!res.ok) {
        throw new Error(`Dev.to API error: ${res.status}`);
      }
      const data: DevToItem[] = await res.json();
  
      return data.map((item) => ({
        type: "report" as const,
        title: item.title,
        description: item.description,
        url: item.url,
        coverImage: item.cover_image,
        publishedAt: item.readable_publish_date,
        author: item.user?.name || "Unknown Author",
        authorImage: item.user?.profile_image_90 || null,
        tags: item.tag_list || [],
      }));
    } catch (err) {
      console.error("Error fetching reports:", err);
      return [];
    }
  };
  