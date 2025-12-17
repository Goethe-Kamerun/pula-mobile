# PULA Mobile Application

A modern Mobile application for searching lexemes (words) and contributing audio recordings for language learning. Built with react-native, TypeScript, Tailwind for Styling and Zustand for state management.

## 🔬 What it does

PULA (People's Universal Lexical Access) is a tool for learning and enriching lexicographical data in multiple languages on Wikidata.:

- **Search for lexemes** across multiple languages with detailed translations and glosses
- **Contribute audio recordings** for words that don't have pronunciation audio
- **Review and manage** word lists and recordings
- **Support multiple languages** with a comprehensive language selection system

### Key Features

- 🔍 **Advanced Search**: Search lexemes by language with detailed results
- 🎤 **Audio Recording**: Record and contribute pronunciation audio for missing words
- 🏷️ **Label Management**: Add and manage labeled translations
- 🌍 **Multi-language Support**: Support for hundreds of languages
- 🔐 **OAuth Authentication**: Secure login with Wikimedia OAuth
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Modern UI**: Built with Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js 22.x or higher
- Yarn package manager
- API server running (see backend setup)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pula-mobile
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   API_BASE_URL=http://127.0.0.1:5000/api
   ```

4. **Start the development server**
   ```bash
   yarn start
   ```

5. **Open your Camera and scan QR code in the terminal/ Command Prompt**
   › While Metro is waiting on exp://127.0.0.1:8081
   › Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

   OR:
   **Open your browser**
   › Web is waiting on [http://localhost:8081](http://localhost:8081)
   - This option still has Unresolved issues that need another dependency to view in the browser.
   
   


   


## 🛠️ Development

### Available Scripts

- `yarn start` - Start development server with Turbopack
- `yarn build` - Build the application for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

### Project Structure

```
apula-mobile/
├── app/                 # React-native App
│   ├── _layout.tsx/     # General Laout
│   ├── home.tsx/        # Homepage
│   ├── index.tsx/       # First page to load
│   └── onboarding.tsx   # Onbording page
│
│
│
├───assets
│   ├── adaptive-icon.png     
│   ├── control.png        
│   ├── favicon.png       
│   ├── icon.png
│   └── splash.png   
|    
├── components/            
│   ├── ui/ 
│   │   ├── Button.tsx
│   │   ├── index.ts 
│   │   ├── Input.tsx 
│   │   └── Select.tsx    
│   ├── AudioPlayer.tsx 
│   ├── Container.tsx 
│   ├── DefaultHome.tsx 
│   ├── EditScreenInfo.tsx 
│   ├── Header.tsx
│   ├── LexemeDetails.tsx 
│   ├── ScreenContent.tsx
│   ├── SearchBar.tsx
│   ├── SelectLanguages.tsx
│   ├── TabButton.tsx
│   └── TranslationHome.tsx              
├── hooks/
│   ├── useApi.ts        
│   └── useApiWithStore.ts                
├── lib/                  
│   ├── api.ts
│   ├── constants.ts
│   ├── label-validation.ts
│   ├── theme.ts
│   ├── toast.tsx
│   └── utils.ts 
│          
├── stores/ 
│   ├── appStore.ts
│   ├── authStore.ts
│   ├── index.ts
│   ├── languageStore.ts
│   └── lexemeStore.ts  
│           
├── types/ 
│   ├── api.ts
│   └── react-native-onboarding-swiper.d.ts 
│
├── .env.example
├── .env.local
├── .gitignore
├── app-env.d.ts
├── app.json
├── babel.config.js
├── cesconfig.jsonc
├── eslint.config.js
├── global.css
├── metro.config.js
├── nativewind-env.d.ts
├── package-lock.json
├── package.json
├── prettier.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json

             
```

### Technology Stack

- **Framework**: React-Native & expo-router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 
- **State Management**: Zustand
- **HTTP Client**: Axios


##  Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PUBLIC_API_BASE_URL` | Backend API URL | `https://agpb-server-v1.toolforge.org/api` |

### API Configuration

The application connects to a backend API that provides:

- Language management
- Lexeme search and details
- Audio file management
- User authentication
- Translation contributions

## 📱 Usage

### Searching Lexemes

1. Select source and target languages
2. Enter search terms
3. Browse results with translations and audio
4. Click on lexemes for detailed information

### Contributing Audio

1. Navigate to the Contribute page
2. Select a language to work with
3. Choose words that need audio recordings
4. Record pronunciation audio
5. Review and submit recordings

### Authentication

- Uses Wikimedia OAuth for secure login
- Supports user profiles and contribution tracking
- Maintains session state across browser sessions

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests and linting: `yarn lint`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages

### Testing

- Test your changes thoroughly
- Ensure responsive design works on mobile
- Verify API integration works correctly

## 🚀 Deployment

### Production Build

```bash
yarn start
```


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

##  Acknowledgments

- Built with support from Wikimedia Deutschland
- Uses Wikimedia Codex design system
- Integrates with Wikimedia OAuth for authentication
- Powered by the AGPB backend API

## 📞 Support

For questions or support:

1. Check the [PULA documentation](https://www.wikidata.org/wiki/Wikidata:PULA)
2. Review existing issues on GitHub
3. Create a new issue for bugs or feature requests

---

**pula-mobile** - Making language learning accessible through collaborative audio contributions.
```

This README provides a comprehensive overview of the pula-mobile, including what it does, how to set it up, how to run it, and how to contribute. It covers all the essential information a developer would need to understand and work with the project.
