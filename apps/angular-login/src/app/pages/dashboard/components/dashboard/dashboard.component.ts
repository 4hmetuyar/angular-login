import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenStorageService } from "apps/angular-login/src/app/auth/services/token-storage.service";

@Component({
  selector: "angular-login-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private tokenService: TokenStorageService,private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.tokenService.signOut();
    this.router.navigate(["/auth/login"]);
  }
}
