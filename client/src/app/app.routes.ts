import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserComponent } from './layouts/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoadmapsComponent } from './components/roadmaps/roadmaps.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { CommunityComponent } from './components/community/community.component';

export const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {path: '', redirectTo:'', pathMatch: 'full'},
            {path: '', component: HomeComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'roadmaps', component: RoadmapsComponent},
            {path: 'lessons', component: LessonsComponent},
            {path: 'community', component: CommunityComponent},

            // {path: 'playground', component: PlaygroundComponent}

        ]
    }
];
