export interface Game {
    id: number;
    category: number;
    cover: number;
    created_at: number;
    first_release_date: number;
    name: string;
    parent_game: number;
    platforms?: (number)[] | null;
    release_dates?: (number)[] | null;
    screenshots?: (number)[] | null;
    slug: string;
    updated_at: number;
    url: string;
    checksum: string;
  }
  