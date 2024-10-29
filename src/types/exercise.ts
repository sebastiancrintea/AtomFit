export type Exercise = {
  id: number;
  user_id: number;
  name: string;
  description: string;
  is_duration: boolean;
  duration: number;
  tutorial_link: string;
  created_at: string;
  muscles: string[];
  like: number;
};
