import { Component, OnInit } from '@angular/core';
import { CachorroService } from 'src/app/services/cachorro.service';
import { Cachorro } from 'src/app/Cachorro';

@Component({
  selector: 'app-cachorro',
  templateUrl: './cachorro.component.html',
  styleUrls: ['./cachorro.component.scss'],
})
export class CachorroComponent implements OnInit {
  cachorros: Cachorro[] = [];

  constructor(private cachorroService: CachorroService) {}

  ngOnInit() {
    this.cachorroService.getCachorros().subscribe((data: any) => {
      this.cachorros = data;
    });
  }

  editarCachorro(cachorro: Cachorro) {}

  excluirCachorro(cachorro: Cachorro) {
    this.cachorros = this.cachorros.filter((c) => cachorro.nome !== c.nome);
    this.cachorroService.remove(cachorro.id).subscribe();
  }
}
