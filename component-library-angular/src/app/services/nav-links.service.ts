import { Injectable } from '@angular/core';
import { NavLink } from '../components/jm-header/jm-header.component';

@Injectable({
  providedIn: 'root'
})
export class NavLinksService {
  headerLinks: NavLink[] = [
    { label: 'Home', url: '/', isActive: true },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
    { label: 'Features', url: '/features' }
  ];

  footerLinks: NavLink[] = [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' }
  ];
}
