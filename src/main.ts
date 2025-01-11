// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { HeaderComponent } from './app/header/header.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Bootstraps Angular in the browser
import { AppModule } from './app/app.modules';

// Bootstrap the application with the root module
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
