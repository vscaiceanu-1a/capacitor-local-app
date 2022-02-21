import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cap-local-app';

  public async ngOnInit() {
    await Storage.set({
      key: 'key-from-capacitor',
      value: 'My value from capacitor storage',
    });
  }

  public submitForm(method: 'POST' | 'GET') {
    const mapForm = document.createElement('form');
    mapForm.method = method;
    mapForm.action = 'https://cap-remote-app.herokuapp.com/';
    document.body.appendChild(mapForm);
    mapForm.submit();
  }
}
