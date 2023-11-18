import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificationOpen: boolean = false;
  isSkillsOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Alexis Irana - Résumé');
  }
  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/CV_Dev_Irana_Alexis.pdf');
    link.setAttribute('download', 'CV_Dev_Irana_Alexis.pdf');
    link.click();
    link.remove();
  }

}
