# AI Coupon Game 🎮

A fun, interactive game where users try to convince AI personas to give them coupon codes! Each AI character has their own personality, preferences, and quirks that players need to discover and appeal to.

## 🚀 Features

- **4 Unique AI Personas**: Each with distinct personalities and preferences
- **Real-time Chat Interface**: Beautiful, modern chat UI with text streaming
- **Dynamic Conversations**: Powered by Google's Gemini 2.0 Flash model via OpenRouter
- **Gamified Experience**: Players must use persuasion and creativity to win coupon codes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with React, TypeScript, TailwindCSS, and Framer Motion

## 🎭 Available Personas

1. **Sumana Aunty** (The Urban India) 🏪 - A caring but shrewd neighborhood aunty
2. **Rajesh Uncle** (Tech Bazaar) 💻 - A tech-enthusiastic gadget guru
3. **Priya Didi** (Fashion Street) 👗 - A fashion-forward style expert (Coming Soon)
4. **Chef Gupta** (Food Paradise) 🍽️ - A passionate food connoisseur (Coming Soon)

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your OpenRouter API key
VITE_OPENROUTER_API_KEY=your_actual_api_key_here
```

### 3. Get Your OpenRouter API Key
1. Visit [OpenRouter.ai](https://openrouter.ai/)
2. Sign up for an account
3. Generate an API key
4. Add it to your `.env` file

### 4. Run the Development Server
```bash
npm run dev
```

The game will be available at `http://localhost:3000`

## 🎮 How to Play

1. **Choose a Persona**: Select from the available AI characters on the home screen
2. **Start Chatting**: Each persona will greet you and explain they have coupon codes
3. **Be Persuasive**: Use creativity, stories, compliments, or logical arguments
4. **Discover Preferences**: Each AI has unique likes and dislikes
5. **Win the Code**: Successfully convince them to get your exclusive coupon code!

## 🎯 Tips for Success

- **Sumana Aunty**: Be respectful, share personal stories, use terms of endearment
- **Rajesh Uncle**: Show genuine interest in technology, ask thoughtful questions
- **Be Creative**: Try different approaches - humor, sincerity, expertise, etc.
- **Stay in Character**: The AIs respond better to contextually appropriate conversation
- **Don't Give Up**: Each conversation is unique and dynamic!

## 🛠️ Built With

- **React 18** - Modern frontend framework
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Vite** - Fast build tool and dev server
- **OpenRouter API** - Access to Google's Gemini 2.0 Flash model
- **Lucide React** - Beautiful, customizable icons

## 📁 Project Structure

```
src/
├── components/
│   ├── BrandList.tsx    # Home screen with persona cards
│   └── ChatGame.tsx     # Chat interface for the game
├── data/
│   └── brands.ts        # Persona data and configurations
├── utils/
│   └── api.ts          # OpenRouter API integration
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main app with routing
└── main.tsx           # App entry point
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Adding New Personas

1. Add new persona data to `src/data/brands.ts`
2. Create character prompt in `src/utils/api.ts`
3. Update the persona grid layout if needed

## 🚀 Deployment

The app can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Make sure to set the environment variable on your hosting platform

## 🤝 Contributing

Feel free to contribute by:
- Adding new AI personas
- Improving the UI/UX
- Adding new features
- Fixing bugs

## 📄 License

This project is open source and available under the MIT License. 