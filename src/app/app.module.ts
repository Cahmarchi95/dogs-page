import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CachorroComponent } from './components/cachorro/cachorro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CachorroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/cachorros', pathMatch: 'full' },
      { path: 'cachorros', component: CachorroComponent },
      // Adicione outras rotas conforme necessário
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
