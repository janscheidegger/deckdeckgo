export interface EnvironmentFirebaseConfig {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    storageBucket: string;
    projectId: string;
    messagingSenderId: string;
    storageUrl: string;
    appId: string;
}

export interface EnvironmentTenorConfig {
    url: string;
    key: string;
}

export interface EnvironmentUnsplashConfig {
    url: string;
}

export interface EnvironmentDeckDeckGoConfig {
    prod: boolean;
    appUrl: string;
    apiUrl: string;
    presentationUrl: string;
    globalAssetsUrl: string
}

export interface EnvironmentConfig {
    deckdeckgo: EnvironmentDeckDeckGoConfig;
    firebase: EnvironmentFirebaseConfig;
    tenor: EnvironmentTenorConfig;
    unsplash: EnvironmentUnsplashConfig;
    signalingServerUrl: string;
    prismComponentsUrl: string;
    gifExampleSrc: string;
}

export function setupConfig(config: EnvironmentConfig) {
    if (!window) {
        return;
    }

    const win = window as any;
    const DeckGo = win.DeckGo;

    if (DeckGo && DeckGo.config && DeckGo.config.constructor.name !== 'Object') {
        console.error('DeckDeckGo config was already initialized');
        return;
    }

    win.DeckGo = win.DeckGo || {};
    win.DeckGo.config = {
        ...win.DeckGo.config,
        ...config
    };

    return win.DeckGo.config;
}
