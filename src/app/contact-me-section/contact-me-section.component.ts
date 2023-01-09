import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-me-section',
  templateUrl: './contact-me-section.component.html',
  styleUrls: ['./contact-me-section.component.scss']
})
export class ContactMeSectionComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  async sendMail() {
    // action="https://w01d08b7.kasserver.com/send_mail.php" 
    console.log('sending mail', this.myForm);

    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  
    //  Animation anzeigen
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    // senden

    await fetch('https://w01d08b7.kasserver.com/success.html',
      {
        method: 'POST'
      }
    )

    // Text anzeigen: Nachricht gesendet

    // nameField.disabled = false;
    // emailField.disabled = false;
    // messageField.disabled = false;
    // sendButton.disabled = false;







  }

}
