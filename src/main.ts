import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/home/app.config';
import { AppComponent } from './app/home/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
