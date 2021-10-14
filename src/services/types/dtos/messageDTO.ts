export interface MessageDTO {
  id: number;
  timestamp: number;
  subject: string;
  detail: string;
  read: boolean;
}