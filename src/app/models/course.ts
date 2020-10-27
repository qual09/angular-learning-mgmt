export interface Course {
  id: number,
  name: string,
  imageUrl?: string,
  images?: string[];
  status?: string,
  instructors?: Instructors[],
}

interface Instructors {
  name?: string;
  image?: string;
}