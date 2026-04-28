import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavItem {
  label: string;
  link: string;
  icon: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})



export class SidebarComponent {
  isCollapsed: boolean = false;

  navSections: NavSection[] = [
    {
      title: 'WORKSPACE',
      items: [
        { label: 'Dashboard', link: '/dashboard', icon: 'dashboard' },
        { label: 'Roadmaps', link: '/roadmaps', icon: 'alt_route' },
        { label: 'Lessons', link: '/lessons', icon: 'menu_book' },
        { label: 'Playground', link: '/playground', icon: 'code' },
        { label: 'Community', link: '/community', icon: 'groups' },
      ]
    },
    {
      title: 'YOU',
      items: [
        { label: 'Career', link: '/career', icon: 'work' },
        { label: 'Achievements', link: '/achievements', icon: 'emoji_events' },
        { label: 'Settings', link: '/settings', icon: 'settings' },
      ]
    }
  ];

  currentYear = new Date().getFullYear();
}
