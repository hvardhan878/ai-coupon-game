export interface Brand {
  id: string;
  name: string;
  personaName: string;
  description: string;
  isComingSoon?: boolean;
  bgColor: string;
  accentColor: string;
  emoji: string;
}

export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  gameWon: boolean;
  couponCode?: string;
} 