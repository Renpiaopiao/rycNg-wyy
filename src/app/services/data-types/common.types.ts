// 轮播图
export type Banner = {
  targetId:number;
  url:string;
  imagesUrl:string;
}

// 热门标签推荐
export type HotTag = {
  id: number;
  name: string;
  position: number;
}

// 歌单
export type SongSheet = {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
  tracks: Song[];  // 歌曲组成数组
}

// 歌手
export type Singer = {
  id: number;
  name: string;
  picUrl: string;
  albumSize: number;
}

// 歌曲
export type Song = {
  id: number;
  name: string;
  url: string;
  ar: Singer[];  // 歌手信息
  al: { id: number; name: string; picUrl: string };  // 专辑信息
  dt: number; // 播放时间
}

// 歌曲地址
export type SongUrl = {
  id: number;
  url: string;
}