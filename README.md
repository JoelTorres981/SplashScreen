## 🛠️ Configuración del Splash Screen e Íconos 

Se detalla el proceso realizado para configurar el Splash Screen y los íconos de la aplicación en plataformas nativas utilizando Capacitor:

### 1. Instalación de dependencias
Se instalaron los plugins necesarios para manejar el Splash Screen y la herramienta para generar los assets automáticamente:

```bash
npm install @capacitor/splash-screen
npm install @capacitor/assets --save-dev
```

### 2. Configuración de duración y comportamiento
Se modificó el archivo `capacitor.config.ts` para agregar la configuración del Splash Screen (duración de 3 segundos):

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
    },
  },
};

export default config;
```

### 3. Preparación de los recursos gráficos
Se deben colocar dos imágenes específicas en la carpeta `assets/` en la raíz del proyecto para generar las visuales móviles:

- `icon.png` para los íconos de la aplicación.
- `splash.png` para la imagen de la pantalla de carga principal.

### 4. Compilación e inicialización de la plataforma móvil
Se compiló el proyecto web de Ionic para generar la carpeta `www` y se añadió la plataforma de Android:

```bash
npm run build
npm install @capacitor/android
npx cap add android
```

### 5. Generación de Assets y Sincronización
Se utilizó la herramienta instalada previamente para generar y auto-dimensionar los íconos y splash screens, seguido de la sincronización de las configuraciones y el código web:

```bash
npx capacitor-assets generate
npx cap sync
```

### 6. Ejecución del Proyecto Nativo
Finalmente, para validar el correcto funcionamiento de las configuraciones en un emulador o dispositivo real:
```bash
npx cap open android
```