import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      title: 'Top 5 Benefits of Cumin Seeds',
      excerpt: 'Cumin seeds offer various health benefits, including improved digestion and immunity...',
      image: 'https://picsum.photos/800/400?random=101',
    },
    {
      title: 'How Pistachios Can Boost Brain Health',
      excerpt: 'Packed with nutrients, pistachios support cognitive function and help maintain overall brain health...',
      image: 'https://picsum.photos/400/250?random=102',
    },
    {
      title: 'The Traditional Art of Honey Harvesting in High Altitudes',
      excerpt: 'Mountain honey is prized for its purity. Discover how local farmers collect this natural treasure...',
      image: 'https://picsum.photos/400/300?random=103',
    },
    {
      title: 'Spices Around the World: A Journey Through Taste & Aroma',
      excerpt: 'From Indian masalas to Middle Eastern blends, spices add depth and flavor to global cuisine...',
      image: 'https://picsum.photos/400/300?random=104',
    },
    {
      title: 'Sustainable Farming Methods You Should Know',
      excerpt: 'Learn how smallholder farms adopt eco-friendly practices that benefit both the land and local communities...',
      image: 'https://picsum.photos/400/250?random=105',
    },
    {
      title: 'Seasonal Eating: Why It Matters and How to Get Started',
      excerpt: 'Eating with the seasons ensures fresher, tastier produce while supporting local farmers...',
      image: 'https://picsum.photos/400/300?random=106',
    },
  ];

  /** 
   * "Featured" is the first item, the rest go into a standard grid layout. 
   * In real apps, you might decide differently or rely on a field like "isFeatured".
   */
  get featuredPost(): BlogPost | null {
    return this.blogPosts.length ? this.blogPosts[0] : null;
  }

  get otherPosts(): BlogPost[] {
    return this.blogPosts.slice(1);
  }
}
