import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss']
})
export class MaintenancePage implements OnInit {

  message: string = "Default message"; // fallback

  ngOnInit(): void {
    const userLang = navigator.language || (navigator as any).userLanguage;

    const messages: Record<string, string> = {
      en: "Site is under maintenance\nWe'll be here before the cat catches the ball!",
      ar: "الموقع تحت الصيانة\nسنعود قبل أن يمسك القط بالكرة!",
      fr: "Le site est en maintenance\nNous serons là avant que le chat n'attrape la balle !",
      de: "Die Seite wird gewartet\nWir sind da, bevor die Katze den Ball fängt!"
    };

    this.message = messages[userLang.substring(0, 2)] || messages["en"];
  }
}