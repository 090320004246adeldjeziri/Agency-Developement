import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  standalone: true
})
export class BlogPostComponent {
  postId: number;
  blogPost: any;

  // Mock data for blog posts
  blogPosts = [
    {
      id: 1,
      title: 'The Importance of Mobile App Development',
      content: 'Full content of the blog post about mobile app development...',
      date: 'August 14, 2024',
    },
    {
      id: 2,
      title: 'Top 10 Web Development Trends in 2024',
      content: 'Full content of the blog post about web development trends...',
      date: 'August 10, 2024',
    },
    // Add more blog posts here
  ];

  constructor(private route: ActivatedRoute) {
    this.postId = this.route.snapshot.params['id'];
    this.blogPost = this.blogPosts.find(post => post.id == this.postId);
  }
}
