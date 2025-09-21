import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss']
})
export class NotFoundPage implements OnInit {

  ngOnInit(): void {
    const userLang = navigator.language || (navigator as any).userLanguage;

    const messages: Record<string, string> = {
      en: "Well, well, well ... Seems like the page you are looking for has not been found, maybe you would like to try again.",
      ar: "حسنًا حسنًا حسنًا ... يبدو أن الصفحة التي تبحث عنها غير موجودة، ربما ترغب في المحاولة مرة أخرى.",
      fr: "Eh bien, eh bien, eh bien, ... Il semble que la page que vous recherchez n'ait pas été trouvée, peut-être voulez-vous réessayer ?",
      de: "Nun, nun, nun ... Die Seite, die Sie suchen, wurde nicht gefunden, vielleicht möchten Sie es erneut versuchen ?"
    };

    const paragraph = document.querySelector(".text1") as HTMLElement;

    if (paragraph) {
      paragraph.textContent = messages[userLang.substring(0, 2)] || messages["en"];

      if (userLang.substring(0, 2) === 'ar') {
        paragraph.style.textAlign = "right";
      } else {
        paragraph.style.textAlign = "left";
      }
    }
  }
}