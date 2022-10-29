import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  constructor(public api:ApiService) { }

  companyInfo:any = {}

  ngOnInit(): void {
    this.api.getCompanyInfo(1).subscribe((data:any)=>{
      this.companyInfo = data;
    })
  }

}
