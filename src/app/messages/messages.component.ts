import { Component } from '@angular/core';

interface Contact {
  name: string;
  pic: string;
  message: string;
  isFollowing: boolean;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  contacts: Contact[] = [
    {
      name: 'Steve Rogers',
      pic: 'rogers',
      message: "That is America's ass 🇺🇸🍑",
      isFollowing: false
    },
    {
      name: 'Tony Stark',
      pic: 'stark',
      message: "Uh, he's from space, he came here to steal a necklace from a wizard.",
      isFollowing: false
    },
    {
      name: 'Bruce Banner',
      pic: 'banner',
      message: "There's an Ant-Man *and* a Spider-Man?",
      isFollowing: false
    },
    {
      name: 'Thor Odinson',
      pic: 'thor',
      message: "I like this one",
      isFollowing: false
    },
    {
      name: 'Carol Danvers',
      pic: 'danvers',
      message: "Hey Peter Parker, you got something for me?",
      isFollowing: false
    }
  ];

  toggleFollow(contact: Contact): void {
    contact.isFollowing = !contact.isFollowing;
  }

  getTimestamp(index: number): string {
    const timestamps = ['3 hrs ago', '1 hr ago', '2 min ago', '3 hrs ago'];
    return timestamps[index] || 'Just now';
  }
}
