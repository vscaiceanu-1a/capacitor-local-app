import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.cap.local.app',
  appName: 'cap-local-app',
  webDir: 'dist/cap-local-app',
  bundledWebRuntime: false,
  server: {
    allowNavigation: ['cap-remote-app.herokuapp.com'],
    cleartext: true
  },
};

export default config;
