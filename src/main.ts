import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { ProductAppComponent } from './app/product-app/product-app.component';

bootstrapApplication(ProductAppComponent)
  .catch((err) => console.error(err));
