import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Blog {
  id: number;
  title: string;
  author: string;
  shortDescription: string;
  content: {
    subtitle: string;
    paragraph: string;
  }[];
}

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  blogs: Blog[] = [
    {
      id: 1,
      title: 'Visualizing Routes on Interactive Maps with Python: Part 1',
      author: 'Carlos J. Uribe',
      shortDescription: 'A pragmatic guide to interactive data visualization for transportation problems with Folium',
      content: [
        { subtitle: '1. Previous sprint recap', paragraph: "In the previous article, we created an optimizer class à la scikit-learn to solve the Traveling Salesman Problem (TSP) for an arbitrary set of locations in just one simple method call. Long story short, if you have a dataframe with site locations, this optimizer can be “fitted” to those locations to automatically provide the optimal (minimal distance) tour. For more details see:\nA classy approach to solving Traveling Salesman Problems effectively with Python \nImplementing the TSP model in a scikit-learn-like fashion to ease the building and solving of routing optimization…\n At the end of it, we concluded that, even though solving the TSP in a one-liner is super convenient, the output of such optimizer was not enough for a finished prototype. We needed a way to visualize that output quickly, to intuitively verify it and share it with others. Hence, that need is what motivates the goal of this sprint, the sixth in the series: take the output of the optimizer, i.e., a route in the form of ordered locations, and show it graphically on a map. Note that the optimizer’s output, a dataframe storing the optimal route, is now our input, and the output we need to make is the route displayed on a map. The input is general: just an ordered sequence of locations that could represent any kind of route: the stops a transit bus does on any given day, the set of addresses a postal service worker visits to deliver the mail, the path a rider of a food delivery company travels to service many residencies. What matters to us is the visualization of generic routes, and we’ll develop the functionality to do that in this article."},
        { subtitle: 'Enriching the map with interactive information', paragraph: "This is all well and good to get a rough idea of what the route looks like, but we can make the map a bit more insightful with little extra effort by adding more information that can be displayed interactively. For starters, where does the route start? With the current view, it’s not straightforward which of the sites is the “initial one”. There are two markers that are connected to only one segment, so it must be one of these, but we’d have to look at the dataframe to distinguish the “start” from the “finish” site. A better way is to indicate the initial site with a special icon so that we can recognize it at a glance. We do that by adding a folium.Icon object to each marker, making the initial site have a distinct icon"},
      ]
    },
    // Add more blog posts as needed
  ];

  constructor(private router: Router) {}

  readMore(blog: Blog): void {
    this.router.navigate(['/blog', blog.id], { state: { blog } });
  }
}
