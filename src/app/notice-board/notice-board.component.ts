import { Component, OnInit } from '@angular/core';
import message from '../models/message';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message: message[] = [
    {icon:"message", text:"Prezado(a) estudante: A avaliação integradora está próxima!"},
    {icon:"message", text:"Prezado(a) estudante: A avaliação integradora está próxima!"},
    {icon:"message", text:"Prezado(a) estudante: A nota da avaliação integradora será liberada em até 5 dias úteis após a realização da mesma."},
    {icon:"message", text:"Prezado(a) estudante: A nota da avaliação integradora será liberada em até 5 dias úteis após a realização da mesma."},
  ]; 
}
