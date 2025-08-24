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
interface BaseItem {
  type: string;
  title: string;
  url: string;
  publishedAt?: string;
}
interface VideoItem extends BaseItem {
  type: "video" | "short";
  thumbnail: string;
}

interface YouTubeVideoDetails {
  contentDetails?: {
    duration?: string;
  };
}

export const getVideos = async (): Promise<VideoItem[]> => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY_FOR_YT;
  const query = "dsa";

  try {
    // First call: search
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        query
      )}&type=video&maxResults=10&key=${apiKey}`
    );
    const data: { items: YouTubeItem[] } = await res.json();

    // console.log("🔍 Search API full response:", data);

    const videoIds = data.items.map((item) => item.id.videoId).join(",");

    // Second call: get duration
    const detailsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${apiKey}`
      // `https://www.googleapis.com/youtube/v3/captions?part=snippet&id=${videoIds}&key=${apiKey}`
      // `https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=E3oG313_kps&key=${apiKey}`
      // `https://www.googleapis.com/youtube/v3/captions/AUieDabLPE2M-LZ-iAVz0m7Axq9obeAMdaPmo2_THBUNk1DWLaw&key=${apiKey}`
    );
    const detailsData: { items: YouTubeVideoDetails[] } = await detailsRes.json();

    // console.log("⏱️ Videos API full response:", detailsData);

    return data.items.map((item, index) => {
      const duration = detailsData.items[index]?.contentDetails?.duration || "";
      const isShort = parseYouTubeDuration(duration) < 60;

      return {
        type: isShort ? "short" : "video",
        title: item.snippet.title,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        thumbnail:
          item.snippet.thumbnails.high?.url ||
          item.snippet.thumbnails.default.url,
      };
    });
  } catch (err) {
    console.error("YouTube API Error:", err);
    return [];
  }
};


function parseYouTubeDuration(duration: string) {
  const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
  const minutes = parseInt(match?.[1] || "0", 10);
  const seconds = parseInt(match?.[2] || "0", 10);
  return minutes * 60 + seconds;
}

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

export const getReports = async ({
  lan,
  page = 1,
}: {
  lan: string;
  page?: number;
}) => {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?tag=${lan}&per_page=8&page=${page}`
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


interface NewsData {
  status: string,
  totalResults: number,
  articles: 
    {
      title: string,
      description: string
    }[]
  
}

export const getNews = async ({ query }: { query: string }) => {
  const apiKey =  process.env.NEXT_PUBLIC_API_KEY_FOR_NEWS
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${apiKey}`
    );
    if (!res.ok) {
      throw new Error(`Dev.to API error: ${res.status}`);
    }
    const data: NewsData = await res.json();

    return data.articles.slice(0, 5).map((item) => ({
      type: "report" as const,
      title: item.title,
      description: item.description,
    }));
  } catch (err) {
    console.error("Error fetching reports:", err);
    return [];
  }
}
