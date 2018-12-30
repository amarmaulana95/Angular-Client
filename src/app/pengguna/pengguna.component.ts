import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Pengguna } from '../model/pengguna';
import { PenggunaService } from '../service/pengguna.service';

@Component({
  selector: 'app-pengguna',
  templateUrl: './pengguna.component.html',
  styleUrls: ['./pengguna.component.css']
})
export class PenggunaComponent implements OnInit {

  pengguna : Pengguna = {
    nama : "",
    telepon : "",
    email : "",
    username : "",
    password : "",
    status : true
  }

  penggunas: Array<Pengguna> = [];

  constructor(private _us : PenggunaService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this._us.listar().subscribe((data)=>{
      this.penggunas = data.data;
    }, err =>{

    });
  }

  simpan(){
    this._us.simpan(this.pengguna).subscribe((data)=>{
      if(!data.ok){
        alert("Ups ada yang gagal");
      }else{
        alert("Simpan data ok!");
        this.listar();

        this.pengguna = {
          nama : "",
          telepon : "",
          email : "",
          username : "",
          password : "",
          status : true
        }
      }
    }, err => {
      alert(err);
    })
  }

}
