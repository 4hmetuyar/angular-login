import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenStorageService } from "apps/angular-login/src/app/auth/services/token-storage.service";
import { ConnectService } from "../../../services/connect.service";
import { WebSocketService } from "../../../services/web-socket.service";

@Component({
  selector: "angular-login-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  providers: [WebSocketService, ConnectService],
})
export class DashboardComponent implements OnInit {
  constructor(
    private tokenService: TokenStorageService,
    private router: Router,
    private connectService: ConnectService
  ) {
    this.connectService.messages.subscribe((msg) => {
      console.log("Response from websocket: " + msg);
    });
  }

  ngOnInit(): void {}

  logout() {
    this.tokenService.signOut();
    this.router.navigate(["/auth/login"]);
  }
}
