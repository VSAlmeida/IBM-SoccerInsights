import { Component, OnInit } from '@angular/core';
import { ObjectstorageService } from '../objectstorage.service';
import { NluService } from '../nlu.service'
import { Entities } from './entities.mode';
import { log } from 'util';

@Component({
  selector: 'app-objectstorage',
  templateUrl: './objectstorage.component.html',
  styleUrls: ['./objectstorage.component.css']
})
export class ObjectstorageComponent implements OnInit {

  flag: boolean;
  bufferFile: string;
  cos;
  nlu: any;
  entities: Entities[];
  confidence: number;
  Times: Array<string> = [];
  t: number;
  Resultado: Array<string> = [];
  r: number;
  Placar: Array<string> = [];
  p: number;
  Jogador: Array<string> = [];
  j: number;
  Gol: Array<string> = [];
  g: number;
  Textovar: Array<string> = [];


  constructor(private ObjectstorageService: ObjectstorageService, private nluService: NluService) { }

  ngOnInit() { 
  }

  inputFileChange(event) {
    this.Textovar = [];
    this.flag = false;
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const formData = new FormData();
      formData.append('file', file);

      this.ObjectstorageService.cosFile(formData)
        .then((bufferFile: string) => {
        this.bufferFile = bufferFile;
        this.Textovar[0] = this.bufferFile;
        this.nluService.nluFile(this.bufferFile)
        .then((nlu) => {
          this.nlu = nlu;
          this.entities = this.nlu.analysisResults.result.entities;
          this.mytabela();
        });
        this.flag = true;
      });
    }
  }

 

  mytabela(){
    this.Times = [];
    this.Gol = [];
    this.Placar = [];
    this.Jogador = [];
    this.Resultado = [];
    this.g = this.t = this.p = this.j = this.t = 0;
    for (let i = 0; i < this.entities.length; i++) {
      if(this.entities[i].type == "Gol"){ this.Gol[this.g] = this.entities[i].text; this.g++;  }
      if(this.entities[i].type == "Times"){ this.Times[this.t] = this.entities[i].text; this.t++ }
      if(this.entities[i].type == "Resultados"){ this.Resultado[this.r] = this.entities[i].text; console.log("achei"); this.r++ }
      if(this.entities[i].type == "Jogador"){ this.Jogador[this.j] = this.entities[i].text; this.j++ }
      if(this.entities[i].type == "Placares"){ this.Placar[this.p] = this.entities[i].text; this.p++ }

    }
  }

}


