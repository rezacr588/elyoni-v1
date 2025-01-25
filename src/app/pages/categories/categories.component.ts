import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProductCategory {
  title: string;
  imageUrl: string;
  description: string;
  badge?: string;
  type: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  selectedCategory: string = 'all';
  selectedBadge: string = 'all';
  searchQuery: string = '';
  fallbackImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

  categories: ProductCategory[] = [
    {
      title: 'Premium Nuts & Seeds',
      imageUrl: 'https://elyoni-pics.s3.eu-north-1.amazonaws.com/nuts-and-seeds-hero.jpg',
      description: 'Hand-selected almonds, pistachios, walnuts, and exotic seeds.',
      badge: 'Organic Certified',
      type: 'nuts'
    },
    {
      title: 'Artisan Spices',
      imageUrl: 'https://elyoni-pics.s3.eu-north-1.amazonaws.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3NlYXNvbmluZ3MuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0%3D.webp',
      description: 'Small-batch spices from sustainable sources.',
      type: 'spices',
      badge: 'Limited Edition'
    },
    {
      title: 'Botanical Teas',
      imageUrl: 'https://elyoni-pics.s3.eu-north-1.amazonaws.com/Herbal_Tea_Chamomile.webp',
      description: 'Curated herbal blends for wellness and relaxation.',
      badge: 'Wellness',
      type: 'beverages'
    },
    {
      title: 'Dried Fruits Selection',
      imageUrl: 'https://elyoni-pics.s3.eu-north-1.amazonaws.com/2_9b1de245-927f-4864-bdff-a33aa94e43e6_1200x1200.webp',
      description: 'Sun-dried fruits preserved at peak freshness.',
      type: 'fruits'
    },
    {
      title: 'Cold-Pressed Oils',
      imageUrl: 'https://elyoni-pics.s3.eu-north-1.amazonaws.com/unnamed.jpg',
      description: 'Premium oils extracted using traditional methods.',
      badge: 'Artisan',
      type: 'oils'
    },
    {
      title: 'Ancient Grains',
      imageUrl: 'https://cdn.shopify.com/s/files/1/1353/1137/files/6e45.webp?v=1731714785',
      description: 'Nutrient-rich heritage grains for modern kitchens.',
      type: 'grains',
      badge: 'Superfood'
    },
    {
      title: 'Specialty Flours',
      imageUrl: 'https://millermagazine.com/assets/img/blog/6cede8ae-922c-4a3c-af36-528caf173981.jpg',
      description: 'Stone-ground flours for premium baking.',
      type: 'pantry',
      badge: 'New'
    },
    {
      title: 'Plant-Based Proteins',
      imageUrl: 'https://food-ubc.b-cdn.net/wp-content/uploads/2023/01/AdobeStock_246017984-scaled.jpeg',
      description: 'Sustainable protein sources for modern diets.',
      type: 'proteins',
      badge: 'Trending'
    }
  ];

  get filteredCategories() {
    return this.categories.filter(category => {
      const matchesCategory = this.selectedCategory === 'all' || 
                             category.type === this.selectedCategory;
      const matchesBadge = this.selectedBadge === 'all' || 
                          (category.badge === this.selectedBadge);
      const matchesSearch = category.title.toLowerCase().includes(
                            this.searchQuery.toLowerCase()) || 
                            category.description.toLowerCase().includes(
                            this.searchQuery.toLowerCase());
      
      return matchesCategory && matchesBadge && matchesSearch;
    });
  }

  clearFilters() {
    this.selectedCategory = 'all';
    this.selectedBadge = 'all';
    this.searchQuery = '';
  }
}