import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  standalone: true,
  imports: [CommonModule]  // Import CommonModule here
})
export class BlogComponent {
  blogPosts = [
    {
      id: 1,
      title: 'The Importance of Mobile App Development',
      summary: 'Discover why mobile apps are crucial for modern businesses.',
      date: 'August 14, 2024',
    },
    {
      id: 2,
      title: 'Top 10 Web Development Trends in 2024',
      summary: 'Stay ahead of the curve with the latest web development trends.',
      date: 'August 10, 2024',
    },
    // Add more blog posts here
  ];

  constructor(private router: Router) {}

  navigateToPost(id: number): void {
    this.router.navigate(['/blog', id]);
  }
}
