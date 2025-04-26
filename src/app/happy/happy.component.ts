import { Component } from '@angular/core';

interface Quote {
  text: string;
  author: string;
}

interface YouTubeChannel {
  name: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-happy',
  templateUrl: './happy.component.html',
  styleUrls: ['./happy.component.css']
})
export class HappyComponent {
  currentQuoteIndex = 0;
  fadeIn = true;

  quotes: Quote[] = [
    {
      text: "The greatest wealth is health.",
      author: "Virgil"
    },
    {
      text: "Take care of your body. It's the only place you have to live.",
      author: "Jim Rohn"
    },
    {
      text: "Health is not valued until sickness comes.",
      author: "Thomas Fuller"
    },
    {
      text: "Wellness is the natural state of my body.",
      author: "Louise Hay"
    },
    {
      text: "Health and cheerfulness naturally beget each other.",
      author: "Joseph Addison"
    }
  ];

  channels: YouTubeChannel[] = [
    {
      name: "Yoga With Adriene",
      url: "https://www.youtube.com/c/yogawithadriene",
      description: "Nurturing yoga practices for all levels to improve mind-body wellness."
    },
    {
      name: "Headspace",
      url: "https://www.youtube.com/c/Headspace",
      description: "Guided meditations and mindfulness practices for mental well-being."
    },
    {
      name: "Goodful",
      url: "https://www.youtube.com/c/Goodful",
      description: "Holistic wellness content for a balanced, healthy lifestyle."
    }
  ];

  spotifyPlaylistUrl = 'https://open.spotify.com/playlist/37i9dQZF1DX1s9knjP51Oa';
  spotifyEmbedUrl = 'https://open.spotify.com/embed/playlist/37i9dQZF1DX1s9knjP51Oa?utm_source=generator';

  changeQuote(index: number): void {
    this.fadeIn = false;
    setTimeout(() => {
      this.currentQuoteIndex = index;
      this.fadeIn = true;
    }, 500);
  }

  ngOnInit(): void {
    setInterval(() => {
      this.changeQuote((this.currentQuoteIndex + 1) % this.quotes.length);
    }, 8000);
  }
}
