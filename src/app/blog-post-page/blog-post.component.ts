import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogModel } from '../models/blog_model';




@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  blog: BlogModel | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.blog = history.state.blog;
    if (!this.blog) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
    }
  }

  goBack(): void {
    this.router.navigate(['/blogs']);
  }
}
