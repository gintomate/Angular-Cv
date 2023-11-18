import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  Nodejs: boolean = false;
  python: boolean = false;
  react: boolean = false;
  javascript: boolean = false;
  java: boolean = false;
  csharp: boolean = false;
  aspnet: boolean = false;
  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Alexis Irana - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.Nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if (this.aspnet) {
      filterTags.push(Tag.ASPNET);
    }

    if (this.python || this.csharp || this.java || this.angular || this.typescript || this.Nodejs || this.aspnet || this.javascript || this.react) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.angular = false;
    this.Nodejs = false;
    this.python = false;
    this.react = false;
    this.javascript = false;
    this.java = false;
    this.csharp = false;
    this.aspnet = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
