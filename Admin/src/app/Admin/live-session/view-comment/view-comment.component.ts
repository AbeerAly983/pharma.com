import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LiveSession, LiveSessionComment } from 'src/app/interfaces/Admin/live-session';
import { LiveSessionService } from 'src/app/services/Admin/live-session.service';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent {
  id=''
  comment:LiveSessionComment[]=[]


  constructor(private router: Router, private activeRouter: ActivatedRoute, private service:LiveSessionService ) {
    this.activeRouter.paramMap.subscribe( ( params: ParamMap ) => {
      this.id = params.get( 'id' )!;
    } );
  }
  ngOnInit() {
    this.getComment();
  }
  getComment() {
    this.service.getSessionComment(this.id).subscribe( ( result: any ) => {
      this.comment = result;
    } )
  }
}
